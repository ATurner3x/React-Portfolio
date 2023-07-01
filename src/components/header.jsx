import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <h1>Alvin Turner</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-button" activeClassName="active">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="nav-button" activeClassName="active">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-button" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="nav-button" activeClassName="active">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

