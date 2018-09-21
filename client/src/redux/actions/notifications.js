import { ADD_NOTIFICATION } from './types';

export const addNotification = note => {
  return dispatch => {
    dispatch({ action: ADD_NOTIFICATION, note });
  };
};

export const removeNotification = id => {
  return dispatch => {
    dispatch({ action: REMOVE_NOTIFICATION, id });
  };
};
