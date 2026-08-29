

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 data-i18n="aboutHeader">Tentang Saya</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3 data-i18n="aboutSubtitle">PROFIL PROFESIONAL</h3>
            <p data-i18n="aboutP1">Saya Ibnu Dexton, lulusan SMKN 5 Kota Tangerang dengan jurusan Desain Komunikasi Visual. Dengan passion dalam menciptakan desain yang bermakna, saya telah bekerja dengan berbagai klien dari berbagai industries.</p>
            <p data-i18n="aboutP2">Pendekatan saya adalah menggabungkan estetika modern dengan fungsi yang jelas, memastikan setiap proyek tidak hanya terlihat indah tetapi juga efektif dalam menyampaikan pesan.</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number" data-target="20">0+</span>
                <span className="stat-label" data-i18n="statProjects">Proyek Selesai</span>
              </div>
              <div className="stat">
                <span className="stat-number" data-target="15">0+</span>
                <span className="stat-label" data-i18n="statClients">Klien Puas</span>
              </div>
              <div className="stat">
                <span className="stat-number" data-target="4">0</span>
                <span className="stat-label" data-i18n="statYears">Tahun Pengalaman</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/black-cat.gif" alt="Black Cat" className="about-cat-gif" />
            <div className="about-img-wrapper">
              <img src="/GARUDA PS 2026.jpg" alt="About Ibnu" />
            </div>
          </div>
        </div>
        <audio id="tickSound" src="/counting.MP3" preload="auto"></audio>
      </div>
    </section>
  );
}

export default About;
