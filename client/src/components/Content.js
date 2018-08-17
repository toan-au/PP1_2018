import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import FormOne from '../components/Privacy';

class Content extends Component {
  render() {
    return (
      <main className="Content container">
        <Switch>
          <Route exact path="/test" component={FormOne} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Content;
