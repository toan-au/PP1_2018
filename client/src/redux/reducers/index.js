import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// reducers
import user from './user';
import matches from './matches';
import pending from './pending';

// combine the reducers and export
export default combineReducers({ user, matches, pending, form });
