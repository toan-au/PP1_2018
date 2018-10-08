/**
 * Redux actions for genres.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { GET_GENRES } from './types';
import axios from 'axios';

/** Fetch all genres from API and saves to state. */
export const getGenres = () => {
  return async dispatch => {
    const response = await axios.get('/api/genres');
    const genres = response.data;
    dispatch({ type: GET_GENRES, genres });
  };
};
