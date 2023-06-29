import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './aboutMe';
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';

const Content = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
};

export default Content;
