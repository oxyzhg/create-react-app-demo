const initialState = {
  serve: 'https://api.youthol.cn/api',
  localhost: 'http://localhost:5000/api'
};

export default (state = initialState.serve) => state;
