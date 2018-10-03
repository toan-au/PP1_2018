import { GET_VIEW_USER } from '../actions/types';

/** Reducer containing current user's information. */
export default (state = null, action) => {
  switch (action.type) {
    case GET_VIEW_USER:
      return action.user;
    default:
      return state;
  }
};
