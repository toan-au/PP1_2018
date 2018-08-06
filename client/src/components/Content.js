import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';

class Content extends Component {
  render() {
    return (
      <main className="Content container">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Content;
