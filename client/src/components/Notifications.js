import React from 'react';
import { connect } from 'react-redux';

const notifications = [{ id: 0, component: <div>hello world</div> }];

const Notifications = () => {
  return (
    <div className="Notifications">
      <ul>
        {notifications.map(note => (
          <div className="note" key={note.id}>
            {note.component}
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Notifications);
