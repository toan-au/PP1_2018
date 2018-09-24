import { GET_MATCHED, REMOVE_MATCHED } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_MATCHED:
      return action.matches;
    case REMOVE_MATCHED:
      const newState = state.filter(matched => matched.id !== action.targetId);
      return newState;
    default:
      return state;
  }
};
