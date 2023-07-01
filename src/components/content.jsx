import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './aboutMe';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';
import '../styles/content.css';

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default Content;
