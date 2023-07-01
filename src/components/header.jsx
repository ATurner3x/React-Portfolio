import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <h1>Alvin Turner</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-button">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-button">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-button">Contact</Link>
          </li>
          <li>
            <Link to="/resume" className="nav-button">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
