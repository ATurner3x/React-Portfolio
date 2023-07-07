import React from 'react';
import '../styles/portfolio.css';

import hangoverHelper from '../assets/images/hangoverhelper.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Hangover Helper',
      imageSrc: hangoverHelper,
      description: 'A web application to help cure hangovers.',
      deployedLink: 'https://aturner3x.github.io/Hangover-Helper/',
      githubLink: 'https://github.com/ATurner3x/Hangover-Helper'
    },
    {
      title: 'Weather Dashboard',
      imageSrc: weatherDashboard,
      description: 'A weather dashboard to display current weather conditions and forecast.',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/project2'
    },
    // Add more project objects as needed
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div className="portfolio-item" key={index}>
          <img src={project.imageSrc} alt={project.title} />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-links">
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
