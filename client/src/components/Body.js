import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Body;
