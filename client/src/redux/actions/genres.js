import { GET_GENRES } from './types';
import axios from 'axios';

/** Fetch all genres from API and saves to state. */
export const getGenres = () => {
  return async dispatch => {
    //const res = await axios.get('/api/matches/successful/' + userId);
    //const matches = res.data;
    const response = await axios.get('/api/genres');
    const genres = response.data;
    dispatch({ type: GET_GENRES, genres });
  };
};
