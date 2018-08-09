import { GET_MATCHES } from './types';
import axios from 'axios';

export const getMatches = user_id => {
  return async dispatch => {
    const res = await axios.get('/api/match/' + user_id);
    const matches = res.data;
    dispatch({ type: GET_MATCHES, matches });
  };
};
