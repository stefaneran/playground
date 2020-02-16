import { select, call, put, all, takeEvery } from "redux-saga/effects";
import { addItemRequest, deleteItemRequest } from '../../requests';
import {
	ADD_ITEM,
	DELETE_ITEM
} from "../store/store";
import {
	requestStart,
	addItemSuccess,
	addItemFail,
	deleteItemSuccess,
	deleteItemFail
} from "../store/store";
import { IStoreItem } from "../..";

/* Info:
	select - equivalent of thunk "getState"
	put - equivalent of "dispatch"
	call - Async calling of a function
*/

function* addItemSaga() {
	yield put(requestStart());
	const { items } = yield select();
	let item: IStoreItem;
	try {
		item = yield call(addItemRequest, items);
		yield put(addItemSuccess(item));
	} catch (e) {
		yield put(addItemFail());
	}
}

function* deleteItemSaga() {
	yield put(requestStart());
	const success = yield deleteItemRequest();
	if (success) {
    yield put(deleteItemSuccess());
  } else {
    yield put(deleteItemFail());
  }
}

function* Sagas() {
  yield all([
    takeEvery(ADD_ITEM, addItemSaga),
    takeEvery(DELETE_ITEM, deleteItemSaga)
  ]);
}
  
export default Sagas;