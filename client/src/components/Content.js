import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// pages
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';

class Content extends Component {
  render() {
    return (
      <main className="Content container">
        <Switch>
          {this.props.user && <Route path="/" component={Home} />}
          <Route path="/" component={AboutUs} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Content);
