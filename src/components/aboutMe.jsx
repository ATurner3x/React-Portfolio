import React from 'react';
import '../styles/aboutMe.css';
import myPhoto from '../assets/images/portfoliopic.png';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-title">About Me</h2>
      <img src={myPhoto} alt="Alvin Turner" className="about-me-photo" />
      <p className="about-me-content">Hello, I'm Alvin Turner, a self-taught full-stack web developer. I'm passionate about coding and have been expanding my knowledge and expertise in web development. With a diverse background in Sales and Customer Service, I bring strong communication and interpersonal skills to the table. I thrive in collaborative environments and actively seek opportunities to enhance my skills. As a problem solver, I enjoy the process of finding creative solutions. I'm excited to apply my skills and grow as a developer in a challenging and rewarding position.</p>
    </div>
  );
};

export default AboutMe;

