import { IStoreItem } from '../index';
// Suffix to avoid conflict (C = Classic)
import { 
  requestStart as requestStartC, 
  addItemSuccess as addItemSuccessC, 
  addItemFail as addItemFailC, 
  deleteItemSuccess as deleteItemSuccessC, 
  deleteItemFail as deleteItemFailC
} from '../classic/store';
// Suffix to avoid conflict (RTK = ReduxToolkit)
import { 
  requestStart as requestStartRTK, 
  addItemSuccess as addItemSuccessRTK, 
  addItemFail as addItemFailRTK, 
  deleteItemSuccess as deleteItemSuccessRTK, 
  deleteItemFail as deleteItemFailRTK
} from '../reduxtoolkit/store';

const addItemRequest = async (items) => {
  let item: IStoreItem;
  const itemId = items.length;
  const request = () => setTimeout(() => {
    item = { id: itemId, value: "item" };
  }, 2000);
  await request();
  return item;
}

const deleteItemRequest = async () => {
  let success: boolean;
  const request = () => setTimeout(() => {
    success = true;
  }, 2000);
  await request();
  return success;
}

export const addItemC = () => async (dispatch, getState) => {
  const { items } = getState();
  dispatch(requestStartC());
  let item: IStoreItem;
  try {
    item = await addItemRequest(items);
    dispatch(addItemSuccessC(item));
  } catch (e) {
    dispatch(addItemFailC());
  }
}

export const deleteItemC = () => async dispatch => {
  dispatch(requestStartC());
  const success = await deleteItemRequest();
  if (success) {
    dispatch(deleteItemSuccessC());
  } else {
    dispatch(deleteItemFailC());
  }
}

export const addItemRTK = () => async (dispatch, getState) => {
  const { items } = getState();
  dispatch(requestStartRTK());
  let item: IStoreItem;
  try {
    item = await addItemRequest(items);
    dispatch(addItemSuccessRTK(item));
  } catch (e) {
    dispatch(addItemFailRTK());
  }
}

export const deleteItemRTK = () => async dispatch => {
  dispatch(requestStartRTK());
  const success = await deleteItemRequest();
  if (success) {
    dispatch(deleteItemSuccessRTK());
  } else {
    dispatch(deleteItemFailRTK());
  }
}