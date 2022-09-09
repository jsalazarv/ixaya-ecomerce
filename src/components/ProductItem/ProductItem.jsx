import {
  addItem,
  deleteCheckoutItem,
  removeItem,
} from '../../store/cart/index.js';
import { useDispatch } from 'react-redux';

export const ProductItem = ({
  product = {},
  incrementable = false,
  deletable = false,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      <div className="image-container">
        <img className="product__image" src={product.image_url} alt="" />
      </div>
      <div className="product__body">
        <h2 className="product__body__title">{product.title}</h2>
        <p>{product.short_description}</p>
        <p>
          Quantity:
          {incrementable && (
            <button onClick={() => dispatch(removeItem(product))}>-</button>
          )}
          <span>{product.qty}</span>
          {incrementable && (
            <button onClick={() => dispatch(addItem(product))}>+</button>
          )}
        </p>
        <p>
          Unit price:
          <span>${product.price}</span>
        </p>
        <p>
          Discount:
          <span className="discount">- ${product.discount}</span>
        </p>
      </div>
      <div className="product__info">
        {deletable && (
          <button onClick={() => dispatch(deleteCheckoutItem(product))}>
            delete
          </button>
        )}

        <p>
          Subtotal:
          <span>${product.total}</span>
        </p>
      </div>
    </div>
  );
};
