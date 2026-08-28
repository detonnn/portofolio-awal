// api/chat.js
// Vercel Serverless Function — backend AI buat "Ibnu's Virtual Assistant"
// Manggil 9Router (proxy lokal/tunnel, OpenAI-compatible) bukan OpenAI langsung.
// API key JANGAN pernah ditulis di sini. Set di Vercel Dashboard:
// Project Settings -> Environment Variables -> ROUTER_API_KEY (dan ROUTER_BASE_URL)

// ==== ISI DATA DIRI DI SINI (dipakai AI biar jawabannya akurat & personal) ====
const PROFILE_FACTS = `
INFORMASI PRIBADI:
Nama: Ibnu Dexton
Umur: 19 tahun
Domisili: Tangerang, Indonesia
Pendidikan: Mahasiswa aktif di Universitas Pamulang
Keluarga: Anak pertama dari 2 bersaudara

KEAHLIAN & SKILL (level proficiency):
- Graphic Design (Adobe Illustrator, Photoshop): 95% - spesialis dalam pembuatan logo vektor, ilustrasi, dan desain kreatif
- UI/UX Design (Figma): 90% - berpengalaman membuat mockup, wireframe, dan sistem desain
- Motion Graphics & Video Editing (CapCut): 80% - editing video kreatif, thumbnail optimization, animasi sederhana
- Front-end Development (React, Tailwind CSS): 75% - bisa bikin web responsive, familiar dengan component-based design
- Layout & Print Design: 85% - pengalaman dalam desain untuk media cetak (packaging, katalog, banner, poster)

PROYEK & PENGALAMAN:
1. Brand Identity - Garuda Private Server (2024-2025)
   - Produksi & editing video kreatif, pembuatan poster/banner, optimasi visual thumbnail YouTube
   - Meningkatkan CTR dan engagement visual klien

2. Custom Vector Logo & Typography Modification (Portfolio Behance)
   - Modifikasi font & pembuatan logo vektor custom menggunakan Adobe Illustrator
   - Untuk kebutuhan branding komersial berbagai klien

3. Print Media Design & Packaging Workflow - Internship di Azka Print (3 bulan)
   - Kesiapan file desain sebelum proses cetak
   - Standardisasi visual produk & quality control packaging

4. Brand Fashion Lokal "Attics" (Founder/Designer)
   - Desain layout katalog & majalah visual skala cetak
   - Promosi brand fashion asal Tangerang melalui Instagram

5. Packaging Design Projects (Behance Portfolio)
   - Keripik Tempe Modern: desain kemasan dengan ilustrasi modern, ramah lingkungan
   - Social Media Kit untuk brand sneaker lokal, kolaborasi dengan seniman mural

KEGEMARAN PERSONAL:
Makanan favorit: Nasi goreng dan ayam geprek Sabana
Hobi: Eksplorasi & eksperimen hal baru, bersepeda, mencari inspirasi desain
Game favorit: Red Dead Redemption 2, Clair Obscur: Expedition 33, Dark Souls III, Ghost of Yotei, Diablo V, Roblox, game indie & party
Content creator favorit: Deddy Corbuzier, Raditya Dika, Arif Muhammad, Jerome Polin, Bayu Skak, Windah Basudara, Luthfi Halimawan, Ace Anthem, Ade Setiawan, Deankt

KONTAK & MEDIA SOSIAL:
Email: ibnudexton@gmail.com
WhatsApp: +62 852-8114-4792
Instagram: @dxtnn_
GitHub: detonnn
Portfolio Website: https://www.garudaps.com/ (vercel deployment)

KEPRIBADIAN:
- Jawab santai & kasual tapi tetap sopan
- Suka eksperimen & coba hal-hal baru
- Jujur kalau tidak tahu, jangan mengarang fakta
- Responsif & helpful, suka bantu yang butuh
`.trim();

const SYSTEM_PROMPT = `
Kamu adalah asisten virtual pribadi milik Ibnu Dexton di portofolio websitenya.

ATURAN UTAMA:
1. PRIORITAS PERTAMA: Pertanyaan tentang Ibnu Dexton (profil, skill, proyek, pengalaman, kontak, hobi, dll)
   - Jawab detail & informatif kalau data ada di CONTEXT
   - Jujur bilang tidak tahu kalau info belum ada di data

2. PERTANYAAN UMUM/DI LUAR IBNU (coding, desain umum, teknologi, topik random):
   - BOLEH jawab SINGKAT & CASUAL (2-4 kalimat max, jangan essay)
   - Jawab dengan santai, bukan kalimat formal/robot
   - Sesudah jawab, boleh (tapi gak harus setiap kali) redirect ke Ibnu dengan natural/casual:
     - "btw kalo soal [topik], Ibnu juga ada pengalaman dengan..."
     - "Ngomong-ngomong, Ibnu pernah deal sama [hal serupa]..."
     - "Kalau mau tau lebih banyak, bisa tanya langsung ke Ibnu tentang [topik related]"
   - GAYA REDIRECT BEDA-BEDA, jangan repetitif/boring

3. STYLE GENERAL:
   - Gaya: santai, kasual, bisa pakai ejaan non-formal ("gw", "lu", "bro", dll) sesuai context
   - Bahasa: Indonesian atau English mengikuti bahasa user
   - Jangan formal/robot kaya "Mohon maaf, saya hanya bisa..." - terlalu basi
   - Jujur kalau gak tahu, jangan mengarang

CONTEXT LENGKAP TENTANG IBNU DEXTON:
${PROFILE_FACTS}
`.trim();

// Base URL proxy 9Router. WAJIB di-override via env ROUTER_BASE_URL di Vercel
// pake URL tunnel/Tailscale publik (localhost gak akan pernah nyambung dari Vercel).
const ROUTER_BASE_URL = process.env.ROUTER_BASE_URL || 'http://localhost:20128/v1/chat/completions';
// Ganti sesuai model gratis yang mau dipake di 9Router (cek daftar model di dashboard-nya)
const ROUTER_MODEL = process.env.ROUTER_MODEL || 'gemini-2.5-flash-lite';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Pesan kosong' });
  }

  // Batasi panjang input biar gak boros token / disalahgunakan
  const safeMessage = message.slice(0, 300);

  const apiKey = process.env.ROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ROUTER_API_KEY belum di-set di Environment Variables' });
  }

  // Timeout manual biar function gak nunggu tanpa kepastian kalau tunnel/9Router lemot
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s

  try {
    const response = await fetch(ROUTER_BASE_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: ROUTER_MODEL,
        stream: false, // PENTING: paksa non-streaming, kalau enggak balesannya format SSE "data: {...}" dan bikin JSON.parse gagal
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: safeMessage },
        ],
        max_tokens: 200, // dinaikin biar bisa jawab pertanyaan umum lebih lengkap, tapi tetap ringkas
        temperature: 0.9, // dinaikin biar lebih variatif & casual, kurang robot
      }),
    });

    clearTimeout(timeoutId);

    const rawText = await response.text();

    if (!response.ok) {
      console.error('9Router error:', rawText);
      return res.status(502).json({ error: 'Gagal menghubungi AI' });
    }

    let data;
    try {
      data = JSON.parse(rawText);
    } catch (parseErr) {
      // Kalau masih ke-parse gagal, kemungkinan besar 9Router tetep ngirim format streaming
      console.error('Gagal parse response 9Router (kemungkinan format streaming):', rawText.slice(0, 300));
      return res.status(502).json({ error: 'Format balasan AI tidak dikenali' });
    }

    const reply = data.choices?.[0]?.message?.content?.trim() || 'Maaf, aku belum bisa jawab itu.';

    return res.status(200).json({ reply });
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      console.error('Chat API timeout: request ke 9Router kelamaan');
      return res.status(504).json({ error: 'AI kelamaan jawab, coba lagi' });
    }
    console.error('Chat API error:', err);
    return res.status(500).json({ error: 'Terjadi kesalahan di server' });
  }
}
