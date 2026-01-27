import React from 'react';
import { heroInfo } from '../../Data';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <p className="hero-greeting">Chào mừng đến với trang giới thiệu bản thân của tôi !</p>
        <div className="hero-avatar-box">
          <img src={heroInfo.avatar} alt={heroInfo.name} className="hero-avatar" />
        </div>
        <h1 className="hero-name">
          {heroInfo.name}
        </h1>
        <h2 className="hero-title">{heroInfo.title}</h2>
        <p className="hero-description">{heroInfo.description}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-galaxy-primary">
            Dự Án Của Tôi
          </a>
          <a href="#contact" className="btn-galaxy-primary">
            Liên Hệ
          </a>
          <a href="/Trinh_Duong_Quang_Frontend_Intern.pdf" download className="btn-galaxy-primary">
            CV Của Tôi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;