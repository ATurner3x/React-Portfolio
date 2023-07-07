import React from 'react';
import { BrowserRouter as Router, Route, Routes, IndexRoute } from 'react-router-dom';
import AboutMe from '../components/aboutMe';
import Contact from '../components/contact';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import Resume from '../components/resume';
import '../styles/appContainer.css';

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <IndexRoute element={<AboutMe />} /> {/* Set AboutMe component as the default route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
