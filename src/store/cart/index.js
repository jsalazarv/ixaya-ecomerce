import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: [],
};

const authSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const index = state.items.findIndex((row) => {
        return row.product.id === product.id;
      });
      const currentItem = state.items[index];
      const quantity = currentItem ? currentItem.quantity + 1 : 1;
      const total = quantity * product.price;
      const item = { product, quantity, total };

      currentItem ? (state.items[index] = item) : state.items.push(item);
      state.items = [...state.items];
    },
    removeItem: (state, action) => {
      const product = action.payload;
      const index = state.items.findIndex((row) => {
        return row.product.id === product.id;
      });
      const currentItem = state.items[index];
      if (!currentItem) {
        return;
      }
      const quantity = currentItem.quantity - 1;
      const total = quantity * product.price;
      const item = { product, quantity, total };
      quantity >= 1
        ? (state.items[index] = item)
        : state.items.splice(index, 1);
      state.items = [...state.items];
    },

    deleteCheckoutItem: (state, action) => {
      const index = state.items.findIndex((row) => {
        return row.product.id === action.payload.product.id;
      });

      console.log(index, action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
        state.items = [...state.items];
      }
    },
  },
});

export const { addItem, removeItem, deleteCheckoutItem } = authSlice.actions;

export default authSlice.reducer;
