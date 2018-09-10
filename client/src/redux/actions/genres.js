import { GET_GENRES } from './types';
import axios from 'axios';

export const getGenres = () => {
  return async dispatch => {
    //const res = await axios.get('/api/matches/successful/' + userId);
    //const matches = res.data;
    const genres = [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Fantasy' },
      { id: 3, name: 'FPS' },
      { id: 4, name: 'platformer' },
      { id: 5, name: 'puzzle' },
      { id: 6, name: 'RPG' },
      { id: 7, name: 'Shooters' },
      { id: 8, name: 'arcade' }
    ];
    dispatch({ type: GET_GENRES, genres });
  };
};
