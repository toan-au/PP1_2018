/**
 * Redux actions for notifications.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './types';

/**
 * Add notification to notification state.
 * @param {string} note - The message text of the note.
 */
export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADD_NOTIFICATION, note });
    setTimeout(
      () => dispatch({ type: REMOVE_NOTIFICATION, id: note.id }),
      2000
    );
  };
};

/**
 * Remove notification from notification state.
 * @param {number} id - The id the note to remove.
 */
export const removeNote = id => {
  return dispatch => {
    dispatch({ type: REMOVE_NOTIFICATION, id });
  };
};
