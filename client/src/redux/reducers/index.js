import { combineReducers } from 'redux';

// reducers
import user from './user';
import matches from './matches';

// combine the reducers and export
export default combineReducers({ user, matches });
