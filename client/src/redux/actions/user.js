import axios from 'axios';
import { GET_USER, LOGOUT_USER, UPDATE_USER } from './types';

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

// update the user
// given user's id and object containing values to update
export const updateUser = (id, newUser) => {
  return async dispatch => {
    const data = new FormData();

    // Append all items in form data to body of request
    Object.keys(newUser).forEach(key => {
      if (key !== 'pfp') data.append(key, newUser[key]);
    });
    if (newUser.pfp !== undefined) {
      data.append('pfp', newUser.pfp[0]);
    }

    // const it = data.values();
    // var result = it.next();
    // while (!result.done) {
    //   console.log(result.value); // 1 3 5 7 9
    //   result = it.next();
    // }

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

export const logoutUser = () => {
  return async dispatch => {
    // log out server side
    await axios.get('/api/auth/logout');
    dispatch({ type: LOGOUT_USER });
  };
};
