
// Action creator
const createAction = type => payload => ({
  type,
  payload
});

// Action Type constants
export const ADD_ITEM_ASYNC = "ADD_ITEM_ASYNC";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

// Action dispatchers
export const addItemAsync = createAction(ADD_ITEM_ASYNC);
export const addItem = createAction(ADD_ITEM);
export const deleteItem = createAction(DELETE_ITEM);

const initialState = {
  items: [],
  loading: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...items, action.payload]
      }
    }
    case ADD_ITEM_ASYNC: {
      // Loading set to "true" in pre-middleware
      return {
        ...state,
        items: [...items, action.payload],
        loading: false
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: items.filter(item => item.id !== action.payload)
      }
    }
    default:
      return state;
  }
}