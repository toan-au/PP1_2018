import { GET_MATCHED } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MATCHED:
      return action.matches;
    default:
      return state;
  }
};
