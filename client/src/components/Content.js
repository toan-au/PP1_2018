/**
 * Content component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/** General component to wrap website content. */
const Content = ({ children }) => {
  return <main className="Content">{children}</main>;
};

const mapStateToProps = state => ({ user: state.user });

export default withRouter(connect(mapStateToProps)(Content));
