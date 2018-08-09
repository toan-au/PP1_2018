import { GET_USER } from './types';

export const getUser = () => {
  return async dispatch => {
    const user = {
      id: 1,
      display_name: 'kmariaud0',
      email: 'bianinotti0@symantec.com'
    };
    dispatch({ type: GET_USER, user });
  };
};
