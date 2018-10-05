/**
 * Combines Redux reducers and exports.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// reducers
import user from './user';
import matches from './matches';
import pending from './pending';
import matched from './matched';
import games from './games';
import genres from './genres';
import viewUser from './viewUser';
import notifications from './notifications';

// combine the reducers and export
export default combineReducers({
  user,
  matches,
  pending,
  form,
  matched,
  games,
  genres,
  viewUser,
  notifications
});
