/**
 * Redux reducers for full user information - viewUser.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { GET_VIEW_USER } from '../actions/types';

/** Reducer containing current user's information. */
export default (state = null, action) => {
  switch (action.type) {
    case GET_VIEW_USER:
      return action.user;
    default:
      return state;
  }
};
