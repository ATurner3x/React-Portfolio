import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Connect with me @</p>
      <div className="social-links">
        <a href="https://github.com/ATurner3x" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/your-stackoverflow-profile" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
