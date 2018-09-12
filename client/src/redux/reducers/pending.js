import { GET_PENDING, REMOVE_PENDING } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_PENDING:
      return action.payload;

    case REMOVE_PENDING:
      // there will be no pending matches left
      if (state.length - 1 === 0) {
        return null;
      }
      const updatedMatches = state.filter(
        pendingUser => pendingUser.displayName !== action.payload
      );
      return updatedMatches;

    default:
      return state;
  }
};
