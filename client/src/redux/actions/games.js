import { GET_GAMES } from './types';
import axios from 'axios';

export const getGames = () => {
  return async dispatch => {
    const response = await axios.get('/api/games');
    const games = response.data;
    dispatch({ type: GET_GAMES, games });
  };
};
