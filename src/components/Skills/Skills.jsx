import React from 'react';
import { skills } from '../../Data';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Kỹ năng chuyên môn</h2>

        <div className="skills-wrapper">
          {skills.map((category) => (
            <div key={category.id} className="skill-category-row">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.items.map((item, index) => (
                  <div key={index} className="skill-item">
                    <div className="icon-box">
                      <img src={item.icon} alt={item.name} />
                    </div>
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;