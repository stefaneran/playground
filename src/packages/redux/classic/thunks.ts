import { 
  requestStart,
  addItemSuccess,
  addItemFail,
  deleteItemSuccess,
  deleteItemFail
} from './store';
import { addItemRequest, deleteItemRequest } from '../requests';
import { IStoreItem } from '../index';

export const addItem = () => async (dispatch, getState) => {
  console.log('Working');
  const { items } = getState();
  dispatch(requestStart());
  let item: IStoreItem;
  try {
    item = await addItemRequest(items);
    dispatch(addItemSuccess(item));
  } catch (e) {
    dispatch(addItemFail());
  }
}

export const deleteItem = () => async dispatch => {
  dispatch(requestStart());
  const success = await deleteItemRequest();
  if (success) {
    dispatch(deleteItemSuccess());
  } else {
    dispatch(deleteItemFail());
  }
}