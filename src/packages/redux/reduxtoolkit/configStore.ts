import { 
  configureStore, 
  getDefaultMiddleware, 
  // combineReducers 
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer, { initialState as preloadedState } from './store';

export default () => {

  // Note: If using combineReducer, preloadedState's shape has to match the combined result
  /* const rootReducer = combineReducers({
    toolkit: reducer
  }); */

  const middleware = [...getDefaultMiddleware(), thunk];

  const store = configureStore({
    reducer,
    middleware,
    preloadedState
  });

  return store;
}