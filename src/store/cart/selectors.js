export const countCartItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.qty, 0);

export const getCart = (state) => {
  const items = state.cart.items;
  const initialValues = {
    total: 0,
    subtotal: 0,
    discount: 0,
  };
  const totals = state.cart.items.reduce((totals, item) => {
    totals.total += item.total;
    totals.subtotal += item.subtotal;
    totals.discount += item.discount * item.qty;

    return totals;
  }, initialValues);

  return { items, ...totals };
};
