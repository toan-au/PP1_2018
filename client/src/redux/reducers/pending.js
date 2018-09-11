import { GET_PENDING, REMOVE_PENDING } from '../actions/types';

const initialPendingState = {
  loading: true,
  matches: null
};

export default (state = initialPendingState, action) => {
  switch (action.type) {
    case GET_PENDING:
      return action.pending;
    case REMOVE_PENDING:
      // there will be no pending matches left
      if (state.matches.length === 1) {
        return {
          loading: false,
          matches: null
        };
      }
      return {
        loading: false,
        matches: state.matches.filter(
          pendingUser => pendingUser.displayName !== action.displayName
        )
      };
    default:
      return state;
  }
};
