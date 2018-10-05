/**
 * Redux reducers for app's user.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { GET_USER, LOGOUT_USER, UPDATE_USER } from '../actions/types';

/** Reducer containing current user. */
export default (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    case LOGOUT_USER:
      // logout user, set user state to empty
      return null;
    default:
      return state;
  }
};
