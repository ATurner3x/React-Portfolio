import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import { FaUser, FaBriefcase, FaEnvelope, FaFileAlt } from 'react-icons/fa';

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
    </header>
  );
};

export default Header;
