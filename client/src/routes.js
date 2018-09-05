import React from 'react';

import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './pages/Landing';
import Registration from './pages/registration/Registration';
import AboutUs from './pages/AboutUs';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

import Home from './pages/Home';

const AppSwitch = ({ user }) => {
  if (user === null) {
    return <PublicRoutes />;
  }
  if (!user.finishedRegistration) {
    return <UnfinRegRoutes />;
  }
  return <ProtectedRoutes />;
};

/**
 * PublicRoutes - routes available to an unathenticated user.
 */
const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />

      {/* Common Routes */}
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/contact" component={Contact} />

      {/* TODO: Remove when 404 page is implemented */}
      <Redirect to="/" />
    </Switch>
  );
};

const UnfinRegRoutes = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Registration} />

      {/* Common Routes */}
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/contact" component={Contact} />

      {/* TODO: Remove when 404 page is implemented */}
      <Redirect to="/register" />
    </Switch>
  );
};

/**
 * ProtectedRoutes - routes for authenticated users, redirect user's
 * if they try to access register page to the Home page, and
 * redirects any other route not listed to the not found page.
 */
const ProtectedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* TODO: Implement routes bellow */}
      {/* <Route exact path="/matches" component={Mathes} />
        <Route exact path="/pending" component={Pending} />
        <Route exact path="/settings" component={Settings} /> */}

      {/* Common Routes */}
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/contact" component={Contact} />

      {/* TODO: Implement 404 page */}
      {/* <Route path="*" component={NotFoundView} /> */}

      {/* TODO: Remove when 404 page is implemented */}
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default withRouter(connect(mapStateToProps)(AppSwitch));
