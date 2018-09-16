import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Content = ({ children }) => {
  return <main className="Content">{children}</main>;
};

const mapStateToProps = state => ({ user: state.user });

export default withRouter(connect(mapStateToProps)(Content));
