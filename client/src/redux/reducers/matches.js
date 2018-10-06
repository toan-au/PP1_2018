/**
 * Redux reducers for matches.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { GET_MATCHES } from '../actions/types';

/** Reducer containing user's matches. */
export default (state = [], action) => {
  switch (action.type) {
    case GET_MATCHES:
      return action.matches;
    default:
      return state;
  }
};
