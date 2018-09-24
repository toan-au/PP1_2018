import { GET_MATCHED, REMOVE_MATCHED } from './types';
import axios from 'axios';

export const getMatched = userId => {
  return async dispatch => {
    const res = await axios.get('/api/matches/successful/' + userId);
    const matches = res.data;
    dispatch({ type: GET_MATCHED, matches });
  };
};

export const removeUser = (id, targetId) => {
  return dispatch => {
    axios.get(`/api/user/dislike/${id}/${targetId}`);
    dispatch({ type: REMOVE_MATCHED, targetId });
  };
};
