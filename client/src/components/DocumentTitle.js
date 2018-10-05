/**
 * Document Title component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';

/** Set the document title. */
class DocumentTitle extends React.Component {
  componentDidMount() {
    document.title = this.props.children;
  }
  componentDidUpdate() {
    document.title = this.props.children;
  }
  render() {
    return null;
  }
}

export default DocumentTitle;
