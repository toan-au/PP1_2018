import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './types';

export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADD_NOTIFICATION, note });
    setTimeout(
      () => dispatch({ type: REMOVE_NOTIFICATION, id: note.id }),
      4000
    );
  };
};

export const removeNote = id => {
  return dispatch => {
    dispatch({ type: REMOVE_NOTIFICATION, id });
  };
};
