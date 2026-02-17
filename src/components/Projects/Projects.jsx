// src/components/Projects.jsx
import React from 'react';
import { projects } from '../../Data';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Dự Án Đã Tham Gia</h2>

        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-role">
                  <span className="label">Vai trò:</span> {project.role}
                </p>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech-stack">
                  {project.tech.map((t, index) => (
                    <span key={index} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.repoLink ? (
                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="btn-action github">
                      <i className="icon-github"></i> GitHub
                    </a>
                  ) : (
                    <span className="btn-disabled">Private Repo</span>
                  )}

                  {project.demoLink ? (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-action demo">
                      Website
                    </a>
                  ) : (
                    <span className="btn-disabled">Đang phát triển</span>
                  )}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;