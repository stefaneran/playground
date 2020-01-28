
// Action creator
const createAction = type => payload => ({
  type,
  payload
});

// Action Type constants
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

// Action dispatchers
export const addItem = createAction(ADD_ITEM);
export const deleteItem = createAction(DELETE_ITEM);

const initialState = {
  items: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...items, action.payload]
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