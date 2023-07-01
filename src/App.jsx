import React from 'react';
import Header from './components/header';
// import Content from './components/content';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      {/* Replace default header with custom Header component */}
      <Header />


 {/* Add your desired content or components here */}
 <h1>Welcome to My Portfolio</h1>
      <p>Some content goes here...</p>

      
      {/* Replace default content with custom Content component */}
      {/* <Content /> */}

      {/* Replace default footer with custom Footer component */}
      <Footer />
    </div>
  );
}

export default App;
