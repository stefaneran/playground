import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

const slice = createSlice({
  name: 'reduxtools',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteItem: (state, { payload }) => {
      const { items } = state;
      items.splice(items.findIndex(item => item.id === payload), 1);
    }
  }
});

export const { addItem, deleteItem } = slice.actions;

export default slice.reducer;
