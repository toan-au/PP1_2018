import { GET_GAMES } from './types';
import axios from 'axios';

export const getGames = () => {
  return async dispatch => {
    //const res = await axios.get('/api/matches/successful/' + userId);
    //const matches = res.data;
    const games = [
      { id: 1, name: 'Tomb raider' },
      { id: 2, name: 'League of legends' },
      { id: 3, name: 'Destiny' },
      { id: 4, name: 'Halo 3' },
      { id: 5, name: 'God of War' }
    ];
    dispatch({ type: GET_GAMES, games });
  };
};
