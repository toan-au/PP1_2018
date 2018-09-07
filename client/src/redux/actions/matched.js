import { GET_MATCHED } from './types';
import axios from 'axios';

export const getMatched = userId => {
  return async dispatch => {
    const res = await axios.get('/api/matches/successful/' + userId);
    const matches = res.data;
    dispatch({ type: GET_MATCHED, matches });
  };
};
