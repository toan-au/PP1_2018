/**
 * Redux reducers for notifications.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/types';

/** Reducer containing notifications. */
export default (state = [], action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.note];
    case REMOVE_NOTIFICATION:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};
