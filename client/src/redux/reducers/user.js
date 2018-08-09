import {GET_USER} from '../actions/types';

export default (state={}, action) => {
  const 
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state
  }
}