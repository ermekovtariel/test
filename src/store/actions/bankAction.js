import { api, axios } from '../../utils';

export const banks = (setData) => async (dispatch) => {
  return await axios
    .get(`${api}/banks`, {
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

export const deleteBankById = (id) => async (dispatch) => {
  return await axios
    .delete(`${api}/banks/${id}`, {
      withCredentials: true,
    })
    .then((res) => {
      try {
        dispatch({
          type: 'BANK_DELETED_SUCCESS',
          payload: true,
        });
        return res.data;
      } catch (error) {
        dispatch({
          type: 'BANK_DELETED_ERROR',
          payload: false,
        });
      }
    });
};
