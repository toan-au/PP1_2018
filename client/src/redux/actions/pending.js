import { GET_PENDING, REMOVE_PENDING } from './types';
import axios from 'axios';

export const getPending = id => {
  return async dispatch => {
    const response = await axios.get('/api/matches/pending/' + id);

    // response.data is an array of users. If empty, set matches to null.
    const pendingMatches = response.data.length > 0 ? response.data : null;
    const pending = {
      loading: false,
      matches: pendingMatches
    };
    dispatch({ type: GET_PENDING, pending: pending });
  };
};

export const removePending = user => {
  return dispatch => {
    dispatch({ type: REMOVE_PENDING, displayName: user.displayName });
  };
};
