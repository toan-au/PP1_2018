/**
 * Redux actions for app's user.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

import axios from 'axios';
import { GET_USER, LOGOUT_USER, UPDATE_USER } from './types';

/** Get currently authenticated user. */
export const getUser = () => {
  return async dispatch => {
    const response = await axios.get('/api/auth/current');
    const user = response.data;

    if (user === '') {
      dispatch({ type: GET_USER, user: null });
      return null;
    }
    dispatch({ type: GET_USER, user });
    return user;
  };
};

/**
 * Update the user's data.
 * @param {number} id - The id of user to update.
 * @param {object} newUser - User object wth updated values.
 */
export const updateUser = (id, newUser) => {
  return async dispatch => {
    const data = new FormData();

    // Append all items in form data to body of request
    Object.keys(newUser).forEach(key => {
      if (key !== 'pfp') {
        if (typeof newUser[key] !== 'object') {
          data.append(key, newUser[key]);
        } else {
          data.append(key, JSON.stringify(newUser[key]));
        }
      }
    });
    if (newUser.pfp !== undefined) {
      data.append('pfp', newUser.pfp[0]);
    }
    // post formData to api
    const response = await axios({
      method: 'post',
      url: '/api/user/update/' + id,
      data,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });

    const user = response.data;
    dispatch({ type: UPDATE_USER, user });
  };
};

/** Logout user. */
export const logoutUser = () => {
  return async dispatch => {
    // log out server side
    await axios.get('/api/auth/logout');
    dispatch({ type: LOGOUT_USER });
  };
};
