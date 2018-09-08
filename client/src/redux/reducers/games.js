import { SEARCH_GAMES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_GAMES:
      return action.games;
    default:
      return state;
  }
};
