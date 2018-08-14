import axios from 'axios';
import { GET_USER, LOGOUT_USER } from './types';

export const getUser = () => {
  return async dispatch => {
    const response = await axios.get('/auth/current');
    const user = response.data;
    dispatch({ type: GET_USER, user });
  };
};

export const logoutUser = dispatch => {
  dispatch({ type: LOGOUT_USER });
};
