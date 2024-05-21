import React from 'react';
import './Introduction.css';

function Introduction() {
  return (
    <section id="home" className="introduction-section">
      <div className="container">
        <img src="path-to-your-profile-picture.jpg" alt="Profile" className="profile-picture" />
        <h1 className="intro-title">Welcome to My Portfolio</h1>
        <p className="intro-text">Hello! I'm a software developer with a passion for creating amazing web applications.</p>
      </div>
    </section>
  );
}

export default Introduction;
