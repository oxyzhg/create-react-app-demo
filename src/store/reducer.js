import * as actionTypes from './actionTypes';

const urls = {
  serve: 'https://api.youthol.cn/api',
  localhost: 'http://localhost:5000/api'
};

const initialState = {
  username: '',
  baseUrl: urls.serve
};

export default (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionTypes.CHANGE_USER_NAME:
      return Object.assign({}, initialState, { username: payload });
    default:
      return state;
  }
};
