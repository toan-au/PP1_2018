import { GET_PENDING, REMOVE_PENDING } from './types';
import axios from 'axios';

export const getPending = id => {
  return async dispatch => {
    const response = await axios.get('/api/matches/pending/' + id);

    // response.data is an array of users. If empty, set matches to null.
    const payload = response.data.length > 0 ? response.data : null;
    dispatch({ type: GET_PENDING, payload });
  };
};

export const likeUser = (id, targetId) => {
  return async dispatch => {
    const response = await axios.get(`/api/user/like/${id}/${targetId}`);
    const payload = response.data;
    dispatch({ type: GET_PENDING, payload });
  };
};

export const dislikeUser = (id, targetId) => {
  return async dispatch => {
    const response = await axios.get(`/api/user/dislike/${id}/${targetId}`);
    const payload = response.data;
    dispatch({ type: GET_PENDING, payload });
  };
};

export const removePending = user => ({
  type: REMOVE_PENDING,
  payload: user.displayName
});
