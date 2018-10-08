/**
 * Notifications component.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../redux/actions/notifications';

/** Notifications component. */
const Notifications = ({ notifications, removeNote }) => {
  return (
    <div className="Notifications">
      <ul>
        {notifications.map(note => (
          <div
            className="note"
            key={note.id}
            onClick={() => removeNote(note.id)}
          >
            {note.text}
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ notifications }) => ({ notifications });

export default connect(
  mapStateToProps,
  { removeNote }
)(Notifications);
