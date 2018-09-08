import { GET_MATCHES } from './types';
import axios from 'axios';

export const getMatches = userId => {
  return async dispatch => {
    const res = await axios.get('/api/match/' + userId);
    const matches = res.data;
    dispatch({ type: GET_MATCHES, matches });
  };
};
