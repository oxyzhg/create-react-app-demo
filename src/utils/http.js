import axios from 'axios';
import { message as Message } from 'antd';

const instance = axios.create({
  timeout: 3000,
  transformResponse: responseData => {
    const { success, message } = JSON.parse(responseData);
    if (!success) Message.error(message);
    return responseData;
  }
});

instance.interceptors.response.use(
  function(response) {
    const { status, data, statusText } = response;
    if (status === 200) {
      return JSON.parse(response.data);
    } else if (status === 401) {
      // 跳转登录
    } else {
      Message.error(`${status}-${statusText}`);
    }
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default {
  get: (url, params, options) => {
    return instance.get(url, Object.assign({ params }, options));
  },
  post: (url, params, options) => {
    return instance.post(url, params, options);
  },
  put: (url, params, options) => {
    return instance.put(url, params, options);
  },
  delete: (url, params, options) => {
    return instance.delete(url, Object.assign({ params }, options));
  }
};
