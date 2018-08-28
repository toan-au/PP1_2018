import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// pages
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Registration from '../pages/registration/Registration';

class Content extends Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/register" component={Registration} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/contact" component={Contact} />
          {this.props.user && <Route path="/" component={Home} />}
          <Route path="/" component={Landing} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default withRouter(connect(mapStateToProps)(Content));
