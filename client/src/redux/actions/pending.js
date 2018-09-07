import { GET_PENDING, REMOVE_PENDING } from './types';

export const getPending = () => {
  return async dispatch => {
    const pending = [
      { displayName: 'janedoe' },
      { displayName: 'johnsmith' },
      { displayName: 'ariana-grande' }
    ];
    dispatch({ type: GET_PENDING, pending });
  };
};

export const removePending = user => {
  return dispatch => {
    dispatch({ type: REMOVE_PENDING, displayName: user.displayName });
  };
};
