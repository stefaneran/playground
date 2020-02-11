import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './store';

export default () => {
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducer, middleware);
  return store;
}
