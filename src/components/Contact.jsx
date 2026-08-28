import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact reveal-init">
      <div className="container">
        <div className="section-header">
          <h2 data-i18n="contactHeader">Hubungi Saya</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>ibnudexton@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+62 852 8114 4792</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span data-i18n="contactLocation">Tangerang, Indonesia</span>
            </div>
            <div className="contact-social">
              <a href="https://www.instagram.com/dxtnn_" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@risemss" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
              <a href="https://github.com/detonnn" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://wa.me/6285281144792" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <form className="contact-form" id="contactForm">
            <div className="input-group">
              <input type="text" id="contactName" placeholder=" " required />
              <label htmlFor="contactName" data-i18n="formNameLabel">Nama Lengkap</label>
            </div>
            <div className="input-group">
              <input type="email" id="contactEmail" placeholder=" " required />
              <label htmlFor="contactEmail" data-i18n="formEmailLabel">Email</label>
            </div>
            <div className="input-group">
              <input type="text" id="contactSubject" placeholder=" " />
              <label htmlFor="contactSubject" data-i18n="formSubjectLabel">Subjek</label>
            </div>
            <div className="input-group">
              <textarea id="contactMessage" rows="5" placeholder=" " required></textarea>
              <label htmlFor="contactMessage" data-i18n="formMessageLabel">Pesan Anda...</label>
            </div>
            <button type="submit" className="btn btn-primary btn-animate"><span data-i18n="formSendBtn">Kirim Pesan</span> <i className="fas fa-paper-plane"></i></button>
          </form>
        </div>

        {/* Comments Section */}
        <div className="comments-section reveal-init">
          <h3 data-i18n="commentsHeader">Apa Kata Pengunjung</h3>
          <div className="comments-list" id="commentsList">
            <div className="comment-card">
              <div className="comment-avatar"><i className="fas fa-user-astronaut"></i></div>
              <div className="comment-body">
                <h4>Rangga Desainer</h4>
                <p data-i18n="comment1Text">Gila, interfacenya smooth banget bro! Terutama efek transisi pas ngescroll. Semangat terus karyanya 🔥</p>
                <span className="comment-time" data-i18n="comment1Time">1 jam yang lalu</span>
              </div>
            </div>
          </div>

          <form id="commentForm" className="comment-form">
            <h4 data-i18n="commentFormHeader">Tinggalkan Jejakmu</h4>
            <div className="form-row">
              <div className="input-group">
                <input type="text" id="commentName" placeholder=" " required />
                <label htmlFor="commentName" data-i18n="commentNameLabel">Nama Kamu</label>
              </div>
            </div>
            <div className="input-group">
              <textarea id="commentText" rows="2" placeholder=" " required></textarea>
              <label htmlFor="commentText" data-i18n="commentTextLabel">Komentar mantapmu...</label>
            </div>
            <button type="submit" className="btn btn-secondary btn-animate"><span data-i18n="commentSendBtn">Kirim Komentar</span> <i className="fas fa-comment-dots"></i></button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
