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
        return row.id === product.id;
      });
      const currentItem = state.items[index];
      const qty = currentItem ? currentItem.qty + 1 : 1;
      const subtotal = qty * product.price;
      const total = qty * (product.price - product.discount);
      const item = { ...product, qty, subtotal, total };

      currentItem ? (state.items[index] = item) : state.items.push(item);
      state.items = [...state.items];
    },
    removeItem: (state, action) => {
      const product = action.payload;
      const index = state.items.findIndex((row) => {
        return row.id === product.id;
      });
      const currentItem = state.items[index];
      if (!currentItem) {
        return;
      }
      const qty = currentItem.qty - 1;
      const subtotal = qty * product.price;
      const total = qty * (product.price - product.discount);
      const item = { ...product, qty, subtotal, total };
      qty >= 1 ? (state.items[index] = item) : state.items.splice(index, 1);
      state.items = [...state.items];
    },

    deleteCheckoutItem: (state, action) => {
      const index = state.items.findIndex((row) => {
        return row.id === action.payload.id;
      });

      if (index >= 0) {
        state.items.splice(index, 1);
        state.items = [...state.items];
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, deleteCheckoutItem, clearCart } =
  authSlice.actions;

export default authSlice.reducer;
