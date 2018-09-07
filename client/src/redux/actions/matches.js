import { GET_MATCHES, GET_MATCHED } from './types';
import axios from 'axios';

export const getMatches = userId => {
  return async dispatch => {
    const res = await axios.get('/api/match/' + userId);
    const matches = res.data;
    dispatch({ type: GET_MATCHES, matches });
  };
};

export const getMatched = userId => {
  return async dispatch => {
    const res = await axios.get('/api/matches/successful/' + userId);
    const matches = res.data;
    dispatch({ type: GET_MATCHED, matches });
  };
};
