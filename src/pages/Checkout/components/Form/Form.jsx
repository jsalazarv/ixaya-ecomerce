import { useForm } from 'react-hook-form';
import { clearCart } from '../../../../store/cart/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { OrderService } from '../../../../services/OrderService.js';
import { getCart } from '../../../../store/cart/selectors.js';

export const Form = () => {
  const orderService = new OrderService();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);

  const onSubmit = async (data) => {
    const product_list = cart.items.map(({ qty, id: product_id }) => ({
      qty,
      product_id,
    }));

    const payload = { ...data, product_list };

    try {
      const { data } = await orderService.createOrder(payload);
      dispatch(clearCart());
      reset();
      navigate(`/orders/${data.order_id}`);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('finally');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="form-section">
            <h1 className="text-2xl">Shipping details</h1>
            <div className="input-container">
              <div className="flex-1">
                <div className="flex gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      className="input"
                      placeholder="State"
                      {...register('state', { required: true })}
                    />
                    {errors.state && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      className="input"
                      placeholder="City"
                      {...register('city', { required: true })}
                    />
                    {errors.city && <span>This field is required</span>}
                  </div>
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Street name"
                    {...register('street_name', { required: true })}
                  />
                  {errors.street_name && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Address"
                    {...register('address', { required: true })}
                  />
                  {errors.address && <span>This field is required</span>}
                </div>
                <div className="flex gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Zip code"
                      {...register('zip_code', { required: true })}
                    />
                    {errors.zip_code && <span>This field is required</span>}
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Phone"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && <span>This field is required</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment form-section">
            <h1 className="text-2xl">Payment info</h1>
            <div className="input-container">
              <div className="flex-1">
                <div className="form-control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Card holder name"
                    {...register('card_holder', { required: true })}
                  />
                  {errors.card_holder && <span>This field is required</span>}
                </div>
                <div className="form-control">
                  <input
                    type="number"
                    className="input"
                    placeholder="Card number"
                    {...register('card_number', { required: true })}
                  />
                  {errors.card_number && <span>This field is required</span>}
                </div>
                <div className="flex gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Expiration date"
                      {...register('expiration_date', { required: true })}
                    />
                    {errors.expiration_date && (
                      <span>This field is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      className="input"
                      placeholder="CCV"
                      {...register('ccv', { required: true })}
                    />
                    {errors.ccv && <span>This field is required</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center flex justify-center">
              <button
                className="button button-honey w-60 flex justify-center"
                type="submit">
                Pay now
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
