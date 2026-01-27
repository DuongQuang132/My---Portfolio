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
              <span className="icon">
                <svg width="24" height="24" viewBox="0 0 22 22" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12C22 15.771 22 17.657 20.828 18.828C19.656 19.999 17.771 20 14 20H10C6.229 20 4.343 20 3.172 18.828C2.001 17.656 2 15.771 2 12Z" stroke="#ffffff" stroke-width="1.5"/>
                  <path d="M6 8L8.159 9.8C9.996 11.33 10.914 12.095 12 12.095C13.086 12.095 14.005 11.33 15.841 9.799L18 8" stroke="#020202" stroke-width="1.7" stroke-linecap="round"/>
                </svg>
              </span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div className="detail-item">
              <span className="icon">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.585 36.8883C25.185 36.8 18.3834 35.86 11.26 28.7383C4.13837 21.615 3.20004 14.815 3.11004 12.4133C2.97671 8.75333 5.78004 5.19833 9.01837 3.80999C9.40833 3.6416 9.83537 3.57749 10.2576 3.62395C10.6798 3.67041 11.0827 3.82584 11.4267 4.07499C14.0934 6.01833 15.9334 8.95833 17.5134 11.27C17.861 11.7779 18.0097 12.3959 17.931 13.0063C17.8523 13.6167 17.5518 14.1769 17.0867 14.58L13.835 16.995C13.6779 17.1084 13.5674 17.275 13.5238 17.4639C13.4803 17.6527 13.5068 17.8509 13.5984 18.0217C14.335 19.36 15.645 21.3533 17.145 22.8533C18.645 24.3533 20.7334 25.75 22.165 26.57C22.3445 26.6708 22.5558 26.6989 22.7555 26.6487C22.9551 26.5985 23.1279 26.4737 23.2384 26.3L25.355 23.0783C25.7442 22.5614 26.3182 22.2151 26.957 22.112C27.5958 22.0088 28.2496 22.1568 28.7817 22.525C31.1267 24.1483 33.8634 25.9567 35.8667 28.5217C36.1361 28.8682 36.3074 29.2807 36.3629 29.7161C36.4183 30.1514 36.3557 30.5937 36.1817 30.9967C34.7867 34.2517 31.2567 37.0233 27.585 36.8883Z"
                  fill="currentColor"
                />
              </svg>
              </span>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </div>
            <div className="detail-item">
              <span className="icon">
                <svg width="24" height="30" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.3333 11.6667C23.3333 10.1346 23.0316 8.61749 22.4453 7.20203C21.859 5.78656 20.9996 4.50044 19.9162 3.41709C18.8329 2.33374 17.5468 1.47438 16.1313 0.888072C14.7158 0.301767 13.1988 0 11.6667 0C10.1346 0 8.61749 0.301767 7.20203 0.888072C5.78656 1.47438 4.50044 2.33374 3.41709 3.41709C2.33374 4.50044 1.47438 5.78656 0.888072 7.20203C0.301767 8.61749 -2.28299e-08 10.1346 0 11.6667C0 13.9783 0.681667 16.1283 1.84167 17.9417H1.82833L11.6667 33.3333L21.505 17.9417H21.4933C22.6949 16.0693 23.3335 13.8914 23.3333 11.6667ZM11.6667 16.6667C10.3406 16.6667 9.06881 16.1399 8.13113 15.2022C7.19345 14.2645 6.66667 12.9927 6.66667 11.6667C6.66667 10.3406 7.19345 9.06881 8.13113 8.13113C9.06881 7.19345 10.3406 6.66667 11.6667 6.66667C12.9927 6.66667 14.2645 7.19345 15.2022 8.13113C16.1399 9.06881 16.6667 10.3406 16.6667 11.6667C16.6667 12.9927 16.1399 14.2645 15.2022 15.2022C14.2645 16.1399 12.9927 16.6667 11.6667 16.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
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
          <p>© 2026 Trinh Duong Quang Portfolio</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;