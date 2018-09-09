import { GET_USER, LOGOUT_USER, UPDATE_USER } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    case LOGOUT_USER:
      // logout user, set user state to empty
      return null;
    default:
      return state;
  }
};
