import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="text-center">My Projects</h2>
      <div className="project-card">
        <img  alt="Project 1" className="project-image" />
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
      </div>
      <div className="project-card">
        <img  alt="Project 2" className="project-image" />
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
      </div>
      <div className="project-card">
        <img  alt="Project 3" className="project-image" />
        <h3>Project 3</h3>
        <p>Description of project 3.</p>
      </div>
    </section>
  );
}

export default Projects;
