/**
 * Redux reducers for users pending.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import {
  GET_PENDING,
  USER_LIKED,
  USER_DISLIKED,
  REMOVE_PENDING
} from '../actions/types';

/** Reducer containing user's pending matches. */
export default (state = null, action) => {
  switch (action.type) {
    case GET_PENDING:
      return action.payload;

    case USER_LIKED:
      return action.payload;

    case USER_DISLIKED:
      if (state === null) {
        return null;
      }
      if (state.length - 1 <= 0) {
        return null;
      }
      return action.payload;

    case REMOVE_PENDING:
      if (state === null) {
        return null;
      }
      // there will be no pending matches left
      if (state.length - 1 <= 0) {
        return null;
      }
      const updatedMatches = state.filter(
        pendingUser => pendingUser.id !== action.payload
      );
      return updatedMatches;

    default:
      return state;
  }
};
