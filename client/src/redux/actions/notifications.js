import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './types';

export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADD_NOTIFICATION, note });
  };
};

export const removeNote = id => {
  return dispatch => {
    dispatch({ type: REMOVE_NOTIFICATION, id });
  };
};
