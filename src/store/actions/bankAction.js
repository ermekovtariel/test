import axios from 'axios';
import { api } from '../../utils';

export const banks = (setData) => async (dispatch) => {
  return await axios
    .get(`${api}`, {
      withCredentials: true,
    })
    .then((res) => {
      try {
        dispatch({
          type: 'BANKS',
          payload: res.data,
        });
        dispatch({
          type: 'BANKS_GET_SUCCESS',
          payload: true,
        });
        setData(res.data);
        return res.data;
      } catch (error) {
        dispatch({
          type: 'BANKS_GET_ERROR',
          payload: false,
        });
      }
    });
};
