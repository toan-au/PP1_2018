import { GET_MATCHED, REMOVE_MATCHED } from '../actions/types';

/** Reducer containing users user is successfully matched with. */
export default (state = null, action) => {
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
