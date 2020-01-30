
// Action creator
const createAction = type => payload => ({
  type,
  payload
});

// Action Type constants
export const REQUEST_START = "REQUEST_START";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAIL = "ADD_ITEM_FAIL";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAIL = "DELETE_ITEM_FAIL";

// Action dispatchers
export const requestStart = createAction(REQUEST_START);
export const addItemSuccess = createAction(ADD_ITEM_SUCCESS);
export const addItemFail = createAction(ADD_ITEM_FAIL);
export const deleteItemSuccess = createAction(DELETE_ITEM_SUCCESS);
export const deleteItemFail = createAction(DELETE_ITEM_FAIL);

const initialState = {
  items: [],
  loading: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_START: {
      return {
        ...state,
        loading: true
      }
    }
    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        items: [...items, action.payload],
        loading: false
      }
    }
    case ADD_ITEM_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    case DELETE_ITEM_SUCCESS: {
      const itemId = state.items.length - 1;
      return {
        ...state,
        items: items.filter(item => item.id !== itemId),
        loading: false
      }
    }
    case DELETE_ITEM_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    default:
      return state;
  }
}