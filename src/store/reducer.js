import * as actionTypes from './actionTypes';

const urls = {
  serve: 'https://api.youthol.cn/api',
  localhost: 'http://localhost:5000/api',
  mock: 'https://easy-mock.com/mock/5b3f1948b679b37c24076fa0/api'
};

const initialState = {
  BASE_API: urls.mock,
  pageTitle: '首页',
  userList: null
};

export default (state = initialState, actions) => {
  const { type, data } = actions;
  switch (type) {
    case actionTypes.SET_PAGE_TITLE:
      return Object.assign({}, initialState, { pageTitle: data });
    case actionTypes.SET_USER_LIST:
      return Object.assign({}, initialState, { userList: data });
    default:
      return state;
  }
};
