import { GET_MATCHED, REMOVE_MATCHED } from './types';
import axios from 'axios';

/** Fetch the users that the user is successfully matched with, and save to state.
 * @param {number} userId - The id of user.
 */
export const getMatched = userId => {
  return async dispatch => {
    const res = await axios.get('/api/matches/successful/' + userId);
    const matches = res.data;
    dispatch({ type: GET_MATCHED, matches });
  };
};

/** Remove a user from user's matches, and save to state.
 * @param {number} id - The id of user.
 * @param {number} targetId - The id of user to remove.
 */
export const removeUser = (id, targetId) => {
  return dispatch => {
    axios.get(`/api/user/dislike/${id}/${targetId}`);
    dispatch({ type: REMOVE_MATCHED, targetId });
  };
};
