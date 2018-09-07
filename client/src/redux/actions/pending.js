import { GET_PENDING, REMOVE_PENDING } from './types';

export const getPending = () => {
  return async dispatch => {
    const pending = [
      { displayName: 'janedoe' },
      { displayName: 'johnsmith' },
      { displayName: 'ariana-grande' }
    ];
    console.log('pending: ', pending);
    dispatch({ type: GET_PENDING, pending });
  };
};

export const removePending = user => {
  return dispatch => {
    console.log('what am i? ', user);
    dispatch({ type: REMOVE_PENDING, displayName: user.displayName });
  };
};
