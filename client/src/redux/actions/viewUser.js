import { GET_VIEW_USER } from './types';
import axios from 'axios';

export const getMatches = id => {
  return async dispatch => {
    const res = await axios.get('/api/user/' + id);
    const user = res.data;
    dispatch({ type: GET_VIEW_USER, user });
  };
};
