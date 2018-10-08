/**
 * Redux actions for games.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { GET_GAMES } from './types';
import axios from 'axios';

/** Fetch all games from API and saves to state. */
export const getGames = () => {
  return async dispatch => {
    const response = await axios.get('/api/games');
    const games = response.data;
    dispatch({ type: GET_GAMES, games });
  };
};
