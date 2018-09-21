import { ADD_NOTIFICATIONS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NOTIFICATIONS:
      return action.notifications;
    default:
      return state;
  }
};
