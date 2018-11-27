import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { API } from '@/api';
import global from './reducer';

const rootReducer = combineReducers({
  global
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        API
      })
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
