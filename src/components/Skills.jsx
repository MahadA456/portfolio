import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="text-center">My Skills</h2>
      <div className="skill-bar">
        <h5>JavaScript</h5>
        <div className="skill-bar-fill" style={{ width: '80%' }}></div>
      </div>
      <div className="skill-bar">
        <h5>React</h5>
        <div className="skill-bar-fill" style={{ width: '70%' }}></div>
      </div>
      <div className="skill-bar">
        <h5>HTML & CSS</h5>
        <div className="skill-bar-fill" style={{ width: '90%' }}></div>
      </div>
      <div className="skill-bar">
        <h5>Node.js</h5>
        <div className="skill-bar-fill" style={{ width: '60%' }}></div>
      </div>
    </section>
  );
}

export default Skills;
