import React from 'react';
import { heroInfo } from '../../Data';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <p className="hero-greeting">Chào mừng đến với trang giới thiệu bản thân của tôi !</p>
        <h1 className="hero-name">
          {heroInfo.name}
        </h1>
        <h2 className="hero-title">{heroInfo.title}</h2>
        <p className="hero-description">{heroInfo.description}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-galaxy-primary">
            Dự Án Của Tôi
          </a>
          <a href="#contact" className="btn-galaxy-outline">
            Liên Hệ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;