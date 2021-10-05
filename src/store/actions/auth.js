import { url, axios } from '../../utils';

export const authAction = (dispatch) => async () => {
  return await axios
    .get(`${url}auth/me`, {
      withCredentials: true,
    })
    .then((res) => {
      localStorage.setItem('it-academy', JSON.stringify(res.data.data.userId));
      const user = JSON.parse(localStorage.getItem('it-academy'));
      user && window.location.reload();
      try {
        dispatch({
          type: 'AUTH',
          payload: res.data,
        });
        dispatch({
          type: 'AUTH_SUCCESS',
          payload: true,
        });
        return res.data;
      } catch (error) {
        dispatch({
          type: 'AUTH_ERROR',
          payload: false,
        });
      }
    });
};

export const authActionButton = (data) => async (dispatch) => {
  return await axios.post(`${url}auth/login`, data).then((res) => {
    try {
      localStorage.setItem('it-academy', JSON.stringify(res.data.data.userId));
      const user = JSON.parse(localStorage.getItem('it-academy'));
      user && window.location.reload();
      dispatch({
        type: 'AUTH',
        payload: res.data,
      });
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: true,
      });
      return res.data;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: false,
      });
    }
  });
};
