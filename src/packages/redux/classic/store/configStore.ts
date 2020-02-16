import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './store';
import Saga from '../actions/sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(thunk, sagaMiddleware);
  const store = createStore(reducer, middleware);
  sagaMiddleware.run(Saga);
  return store;
}
