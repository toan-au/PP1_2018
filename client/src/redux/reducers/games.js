/**
 * Redux reducers for games.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import { GET_GAMES } from '../actions/types';

/** Reducer containing all games. */
export default (state = [], action) => {
  switch (action.type) {
    case GET_GAMES:
      return action.games;
    default:
      return state;
  }
};
