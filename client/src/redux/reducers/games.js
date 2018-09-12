import { GET_GAMES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_GAMES:
      return action.games;
    default:
      return state;
  }
};
