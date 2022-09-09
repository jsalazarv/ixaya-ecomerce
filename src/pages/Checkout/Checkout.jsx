import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../store/cart/selectors.js';
import { BillingDetails } from '../../components/BillingDetails/BillingDetails.jsx';
import { ProductItem } from '../../components/ProductItem/ProductItem.jsx';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { OrderService } from '../../services/OrderService.js';
import { clearCart } from '../../store/cart/index.js';
import { useNavigate } from 'react-router-dom';
import emptyCartImage from '../../assets/images/JohnTravolta.gif';
import { Form } from './components/Form/Form';

export const Checkout = () => {
  const cart = useSelector(getCart);

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="wrap wrap-margin">
        <h1 className="text-3xl mb-12">Checkout</h1>

        <h1 className="text-2xl">Products</h1>

        {!cart.items.length && (
          <>
            <div className="flex justify-center">
              <img className="w-60 rounded-3xl" src={emptyCartImage} alt="" />
            </div>
            <div className="text-center mt-3">
              <a className="button button-honey text-center" href="/">
                Pus compra algo, ¿no?
              </a>
            </div>
          </>
        )}

        {cart.items.map((product, index) => (
          <ProductItem
            product={product}
            incrementable
            deletable
            key={`item-${index}`}
          />
        ))}

        <div className="order-details">
          <div />
          <BillingDetails
            subtotal={cart.subtotal}
            discount={cart.discount}
            total={cart.total}
          />
        </div>
        {!!cart.items.length && <Form />}
      </div>
    </FormProvider>
  );
};
