import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutMe from '../components/aboutMe';
import Contact from '../components/contact';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import Resume from '../components/resume';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
