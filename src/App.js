import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import './app.css';

function App() {
  return (
    <div className="App">
      {/* Replace default header with custom Header component */}
      <Header />

      {/* Replace default content with custom Content component */}
      <Content />

      {/* Replace default footer with custom Footer component */}
      <Footer />
    </div>
  );
}

export default App;
