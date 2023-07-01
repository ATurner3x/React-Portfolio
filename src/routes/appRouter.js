import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from '../components/aboutMe';
import Contact from '../components/contact';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import Resume from '../components/resume';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
