import React from 'react';
import { contactInfo } from '../../Data';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Thông Tin Liên Hệ</h2>
        <div className="contact-content-centered">
          <p className="contact-desc">{contactInfo.subtitle}</p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="icon">📧</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div className="detail-item">
              <span className="icon">📞</span>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </div>
            <div className="detail-item">
              <span className="icon">📍</span>
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <div className="social-links">
            {contactInfo.socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="social-btn">
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>

        </div>
        
        <div className="footer-copyright">
          <p>© 2024 {contactInfo.email.split('@')[0]}</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;