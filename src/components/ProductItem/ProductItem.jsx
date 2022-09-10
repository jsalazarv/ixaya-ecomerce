import {
  addItem,
  deleteCheckoutItem,
  removeItem,
} from '../../store/cart/index.js';
import { useDispatch } from 'react-redux';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProductItem = ({
  product = {},
  incrementable = false,
  deletable = false,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="delete-item">
        {deletable && (
          <button onClick={() => dispatch(deleteCheckoutItem(product))}>
            <FontAwesomeIcon className="icon" icon={faTrash} />
          </button>
        )}
      </div>
      <div className="product-container">
        <div className="image-container">
          <img className="product__image" src={product.image_url} alt="" />
        </div>
        <div className="product__body">
          <h2 className="product__body__title">{product.title}</h2>
          <p>{product.short_description}</p>
          <div className="mt-3">
            <div className="flex justify-between">
              <div>Quantity:</div>
              <div className="counter">
                {incrementable && (
                  <button
                    className="counter__button"
                    onClick={() => dispatch(removeItem(product))}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                )}
                <span className="counter__qty">{product.qty}</span>
                {incrementable && (
                  <button
                    className="counter__button"
                    onClick={() => dispatch(addItem(product))}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              Unit price:
              <span>${product.price}</span>
            </div>
            <div className="flex justify-between">
              Discount:
              <span className="discount">- ${product.discount}</span>
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="flex justify-between">
            Subtotal:
            <span>${product.total}</span>
          </div>
        </div>
      </div>
    </>
  );
};
