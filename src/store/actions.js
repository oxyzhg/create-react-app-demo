import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUserName = params => async (dispatch, getState, { API }) => {
  const response = await API.fetchUserInfo(params);
  const { success, data } = response;
  if (success) {
    dispatch({
      type: actionTypes.SET_USER_NAME,
      payload: data
    });
  }
};

export const setPageTitle = data => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SET_PAGE_TITLE,
    data
  });
};

export const setUserList = () => (dispatch, getState) => {
  const state = getState();
  const BASE_API = 'https://easy-mock.com/mock/5b3f1948b679b37c24076fa0/api';
  console.log(state);
  axios
    .get(`${BASE_API}/users`)
    .then(res => {
      dispatch({
        type: actionTypes.SET_USER_LIST,
        data: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
