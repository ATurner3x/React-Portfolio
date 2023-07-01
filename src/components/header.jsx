import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <h1>Developer's Name</h1>
      <nav>
        <ul>
          <li><button className="nav-button">About Me</button></li>
          <li><button className="nav-button">Portfolio</button></li>
          <li><button className="nav-button">Contact</button></li>
          <li><button className="nav-button">Resume</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
