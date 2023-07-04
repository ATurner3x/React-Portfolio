import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBriefcase, FaEnvelope, FaFileAlt, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <h1>Alvin Turner</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-button" activeClassName="active">
              <FaUser /> About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="nav-button" activeClassName="active">
              <FaBriefcase /> Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-button" activeClassName="active">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="nav-button" activeClassName="active">
              <FaFileAlt /> Resume
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="social-media-buttons">
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="social-media-button">
          <FaTwitter />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="social-media-button">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-media-button">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
