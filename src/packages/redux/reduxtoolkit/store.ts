import { createSlice } from '@reduxjs/toolkit';
import { addEntryStarted, addEntryFinished } from '../thunks/actions';

const initialState = {
  items: [],
  loading: false
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
  },
  extraReducers: {
    [addEntryStarted]: (state) => {
      state.loading = true;
    },
    [addEntryFinished]: (state, { payload }) => {
      state.items.push(payload);
      state.loading = false;
    }
  }
});

export const { addItem, deleteItem } = slice.actions;

export default slice.reducer;
