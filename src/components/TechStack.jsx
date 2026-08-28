import React from 'react';

function TechStack() {
  return (
    <section id="techstack" className="techstack">
      <div className="container">
        <div className="section-header">
          <h2 data-i18n="techstackHeader">Tech Stack</h2>
          <div className="underline"></div>
        </div>
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-frontend">Frontend</span>
              <span className="tech-version">v18.2</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" loading="lazy" /></div>
            <h3>React</h3>
            <p className="tech-desc" data-i18n="techReactDesc">Jadi tulang punggung hampir semua UI yang saya bangun—component-based, gampang di-reuse, dan enak dipadukan dengan state management ringan.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-framework">Framework</span>
              <span className="tech-version">v14.0</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" loading="lazy" /></div>
            <h3>Next.js</h3>
            <p className="tech-desc" data-i18n="techNextDesc">Andalan untuk proyek yang butuh performa lebih—SSR dan routing bawaannya bikin loading halaman terasa instan tanpa konfigurasi ribet.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-language">Language</span>
              <span className="tech-version">ES6+</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" loading="lazy" /></div>
            <h3>JavaScript</h3>
            <p className="tech-desc" data-i18n="techJsDesc">Bahasa yang paling sering saya sentuh tiap hari—dari logika interaktif kecil sampai integrasi API, selalu jadi lem penghubung antar teknologi lain.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-uilib">UI Lib</span>
              <span className="tech-version">v3.4</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/tailwindcss/38BDF8" alt="Tailwind CSS" loading="lazy" /></div>
            <h3>Tailwind</h3>
            <p className="tech-desc" data-i18n="techTailwindDesc">Bikin proses styling jauh lebih cepat tanpa bolak-balik file CSS terpisah—utility class-nya cocok banget buat iterasi desain yang gesit.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-language">Language</span>
              <span className="tech-version">v8.2</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/php/8892BF" alt="PHP" loading="lazy" /></div>
            <h3>PHP</h3>
            <p className="tech-desc" data-i18n="techPhpDesc">Fondasi logika server-side yang saya pakai sejak awal belajar backend—stabil, dokumentasinya luas, dan tetap relevan untuk banyak proyek nyata.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-backend">Backend</span>
              <span className="tech-version">v10.0</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" loading="lazy" /></div>
            <h3>Laravel</h3>
            <p className="tech-desc" data-i18n="techLaravelDesc">Framework favorit untuk merapikan struktur backend—Eloquent dan routing-nya bikin saya bisa fokus ke logika bisnis, bukan boilerplate.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-database">Database</span>
              <span className="tech-version">v8.0</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" loading="lazy" /></div>
            <h3>MySQL</h3>
            <p className="tech-desc" data-i18n="techMysqlDesc">Tempat saya menaruh kepercayaan untuk data yang butuh relasi jelas dan query yang terstruktur rapi di balik layar setiap aplikasi.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-baas">BaaS</span>
              <span className="tech-version">Latest</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" loading="lazy" /></div>
            <h3>Firebase</h3>
            <p className="tech-desc" data-i18n="techFirebaseDesc">Solusi cepat saat proyek butuh autentikasi atau database real-time tanpa harus bangun server sendiri dari nol.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-mobile">Mobile</span>
              <span className="tech-version">v3.19</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/flutter/02569B" alt="Flutter" loading="lazy" /></div>
            <h3>Flutter</h3>
            <p className="tech-desc" data-i18n="techFlutterDesc">Pilihan saya untuk masuk ke dunia mobile—satu codebase bisa jalan di Android dan iOS, hemat waktu tanpa mengorbankan tampilan.</p>
          </div>

          <div className="tech-card">
            <div className="tech-card-top">
              <span className="tech-category tag-core">Core</span>
              <span className="tech-version">v3.0</span>
            </div>
            <div className="tech-icon"><img src="https://cdn.simpleicons.org/dart/0175C2" alt="Dart" loading="lazy" /></div>
            <h3>Dart</h3>
            <p className="tech-desc" data-i18n="techDartDesc">Bahasa di balik setiap widget Flutter yang saya susun—null safety-nya bikin aplikasi mobile lebih jarang crash saat runtime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
