import axios from 'axios';
import { GET_USER, LOGOUT_USER, UPDATE_USER } from './types';

export const getUser = () => {
  return async dispatch => {
    const response = await axios.get('/api/auth/current');
    const user = response.data;
    dispatch({ type: GET_USER, user });
  };
};

// update the user
// given user's id and object containing values to update
export const updateUser = (id, newUser) => {
  return async dispatch => {
    const response = await axios.post('/api/user/update/' + id, newUser);
    const user = response.data;
    dispatch({ type: UPDATE_USER, user });
  };
};

export const logoutUser = () => {
  return async dispatch => {
    // log out server side
    await axios.get('/api/auth/logout');
    dispatch({ type: LOGOUT_USER });
  };
};
