import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import Landing from '../pages/Landing';

class Content extends Component {
  render() {
    return (
      <main className="Content container">
        <Switch>
          {this.props.user && <Route path="/" component={Home} />}
          <Route path="/" component={Landing} />
        </Switch>
      </main>
    );
  }
}

export default Content;
