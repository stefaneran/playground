import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: [],
  loading: false
}

const slice = createSlice({
  name: 'reduxtools',
  initialState,
  reducers: {
    requestStart: state => {
      state.loading = true;
    },
    addItemSuccess: (state, { payload }) => {
      state.items.push(payload);
      state.loading = false;
    },
    addItemFail: state => {
      state.loading = false;
    },
    deleteItemSuccess: (state) => {
      const { items } = state;
      const itemId = state.items.length - 1;
      items.splice(items.findIndex(item => item.id === itemId), 1);
      state.loading = false;
    },
    deleteItemFail: state => {
      state.loading = false;
    }
  }
});

export const { 
  requestStart, 
  addItemSuccess, 
  addItemFail, 
  deleteItemSuccess, 
  deleteItemFail 
} = slice.actions;

export default slice.reducer;
