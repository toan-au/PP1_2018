import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './types';

export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADD_NOTIFICATION, note });
    setTimeout(() => removeNote(note.id), 1000);
  };
};

export const removeNote = id => {
  console.log('removed ' + id);
  return dispatch => {
    dispatch({ type: REMOVE_NOTIFICATION, id });
  };
};
