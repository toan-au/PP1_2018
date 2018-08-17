import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// reducers
import user from './user';
import matches from './matches';

// combine the reducers and export
export default combineReducers({ user, matches, form });
