import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/types';

const defaultNotes = [
  { id: 0, text: 'Stuff done', color: 'red' },
  { id: 1, text: 'Friend added', color: 'red' },
  { id: 2, text: 'Match disliked', color: 'red' },
  { id: 3, text: 'Match liked', color: 'red' },
  { id: 4, text: 'User rated', color: 'blue' }
];

export default (state = defaultNotes, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.note];
    case REMOVE_NOTIFICATION:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};
