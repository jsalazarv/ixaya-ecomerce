export const countCartItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const getCart = (state) => {
  const items = state.cart.items;
  const total = state.cart.items.reduce((total, item) => item.total + total, 0);
  return { items, total };
};
