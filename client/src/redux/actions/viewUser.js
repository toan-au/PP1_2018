import { GET_VIEW_USER } from './types';
import axios from 'axios';

/**
 * Fetch user from API and save to state.
 * @param {number} id - The id of user to fetch.
 */
export const getViewUser = id => {
  return async dispatch => {
    const res = await axios.get('/api/user/' + id);
    const user = res.data;
    dispatch({ type: GET_VIEW_USER, user });
  };
};
