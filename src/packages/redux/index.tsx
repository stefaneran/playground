import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducerRTK from './reduxtoolkit/store';

export interface IStoreItem {
  id: number;
  value: string;
}

export const initializeStoreC = () => {
  
}

export const initializeStoreRTK = (preloadedState) => {

  const reducer = combineReducers({
    reducerRTK
  });

  const store = configureStore({
    reducer,
    preloadedState
  });

  return store;
}

export { default as ReduxMain } from './ReduxMain';