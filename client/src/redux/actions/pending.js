import {
  GET_PENDING,
  REMOVE_PENDING,
  USER_LIKED,
  USER_DISLIKED
} from './types';
import axios from 'axios';

/**
 * Fetches 'pending users' array from server and saves it as state.
 * @param {number} id - The id of the current user.
 */
export const getPending = id => {
  return async dispatch => {
    const response = await axios.get('/api/matches/pending/' + id);

    // response.data is an array of users. If empty, set matches to null.
    const payload = response.data.length > 0 ? response.data : null;
    dispatch({ type: GET_PENDING, payload });
  };
};

/**
 * Adds a user to liked on server-side, fetches updated user array and saves it as state.
 * @param {number} id - The id of the current user.
 * @param {number} targetId - The id of the liked user.
 */
export const likeUser = (id, targetId) => {
  return async dispatch => {
    const response = await axios.get(`/api/user/like/${id}/${targetId}`);
    const payload = response.data;
    dispatch({ type: USER_LIKED, payload });
  };
};

/**
 * Removes a user from liked on server-side, fetches updated user array and saves it as state.
 * @param {number} id - The id of the current user.
 * @param {number} targetId - The id of the disliked user.
 */
export const dislikeUser = (id, targetId) => {
  return async dispatch => {
    const response = await axios.get(`/api/user/dislike/${id}/${targetId}`);
    const payload = response.data;
    dispatch({ type: USER_DISLIKED, payload });
  };
};

/**
 * Removes a user from current state. Removes user from liked on server-side.
 * @param {number} id - The id of the current user.
 * @param {number} targetId - The id of the user to remove.
 */
export const removePending = (id, targetId) => {
  return dispatch => {
    axios.get(`/api/user/dislike/${id}/${targetId}`);
    dispatch({ type: REMOVE_PENDING, payload: targetId });
  };
};
