import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/types';

export default (state = defaultNotes, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.note];
    case REMOVE_NOTIFICATION:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};
