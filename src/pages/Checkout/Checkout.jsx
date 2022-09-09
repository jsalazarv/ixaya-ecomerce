import { useSelector } from 'react-redux';
import { getCart } from '../../store/cart/selectors.js';
import { BillingDetails } from '../../components/BillingDetails/BillingDetails.jsx';
import { ProductItem } from '../../components/ProductItem/ProductItem.jsx';

export const Checkout = () => {
  const cart = useSelector(getCart);

  return (
    <>
      <div className="wrap">
        <h1 className="text-3xl mb-12">Checkout</h1>

        <h1 className="text-2xl">Products</h1>
        {cart.items.map((product, index) => (
          <ProductItem
            product={product}
            incrementable
            deletable
            key={`item-${index}`}
          />
        ))}

        <div className="order-details">
          <div className="form">
            <div className="input-container">
              <div className="flex-1 pr-4">
                <div className="relative w-full">
                  <input type="search" className="input" placeholder="Name" />
                </div>
              </div>
            </div>
          </div>
          <BillingDetails
            subtotal={cart.subtotal}
            discount={cart.discount}
            total={cart.total}
          />
        </div>
      </div>
    </>
  );
};
