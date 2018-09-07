import { GET_PENDING, REMOVE_PENDING } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_PENDING:
      return action.pending;
    case REMOVE_PENDING:
      if (state === null) {
        return null;
      }
      return state.filter(
        pendingUser => pendingUser.displayName !== action.displayName
      );
    default:
      return state;
  }
};
