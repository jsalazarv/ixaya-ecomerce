import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../store/cart/selectors.js';
import {
  addItem,
  deleteCheckoutItem,
  removeItem,
} from '../../store/cart/index.js';

export const Checkout = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <>
      <table className="text-black">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr key={`p${item.product.id}`}>
              <td>{item.product.title}</td>
              <td>
                <button onClick={() => dispatch(removeItem(item.product))}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => dispatch(addItem(item.product))}>
                  +
                </button>
              </td>
              <td>${item.product.price}</td>
              <td>${item.total}</td>
              <td>
                <button onClick={() => dispatch(deleteCheckoutItem(item))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3"></td>
            <td>{cart.total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
