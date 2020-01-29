import { createAction } from '@reduxjs/toolkit';
import { IStoreItem } from '../index';
import { ADD_ITEM_ASYNC, addItemAsync } from '../classic/store';

// TODO - Make a side effect for pre-middleware example
// TODO - Make a classic thunk 
// TODO - Rename action names to reflect changes above

export const addEntryStarted = createAction(`addEntryStarted`);
export const addEntryFinished = createAction<IStoreItem>(`addEntryFinished`);

const requestItem = async () => {
  let item: IStoreItem;
  const request = () => setTimeout(() => {
    item = { id: "1", value: 2 };
  }, 2000);
  await request();
  return item;
}

// classic redux + pre-middleware
/* 
Note: This should be used when you want to capture an action and do something with the data before it reaches 
the store and/or want to dispatch other actions along the way. 
*/
// Note: classic redux can also be done as regualr thunk like below
export const preMiddleware = store => next => async (action) => {
  const { dispatch, getState } = store;
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM_ASYNC: {
      const item = await requestItem();
      dispatch(addItemAsync(item));
    }
  }
  return next(action);
};

// @reduxjs/toolkit + regular thunk
export const addEntryAsyncTwo = () => async dispatch => {
  dispatch(addEntryStarted());
  const item = await requestItem();
  dispatch(addEntryFinished(item));
}