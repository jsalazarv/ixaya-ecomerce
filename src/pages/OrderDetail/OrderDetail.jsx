import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OrderService } from '../../services/OrderService.js';

export const OrderDetail = () => {
  const params = useParams();
  const orderService = new OrderService();
  const [orderDetail, setOrderDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrderDetail();
  }, [params.id]);

  const getOrderDetail = async () => {
    const payload = {
      order_id: params.id,
    };

    setIsLoading(true);

    try {
      const {
        data: { response },
      } = await orderService.fetchOrderDetail(payload);
      setOrderDetail(response);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return null;

  return (
    <>
      <div className="wrap">
        <h1 className="text-3xl">Order details: {orderDetail.order_code}</h1>

        <div className="shipping-details">
          <div>
            <h1 className="text-2xl mb-2">Shipping details</h1>
            <p>{orderDetail.address}</p>
            <p>
              {orderDetail.city}, {orderDetail.state}, {orderDetail.zip_code}
            </p>
            <p>Phone: {orderDetail.phone}</p>
          </div>
          <div className="order-billing">
            <p className="billing-row">
              Subtotal:
              <span>${orderDetail.subtotal}</span>
            </p>
            <p className="billing-row discount">
              Discount:
              <span>- ${orderDetail.discount}</span>
            </p>
            <h1 className="billing-row">
              Total:
              <span>${orderDetail.total}</span>
            </h1>
          </div>
        </div>

        <h1 className="text-2xl">Products</h1>
        {orderDetail.products.map((product, index) => (
          <div className="product-container" key={`item-${index}`}>
            <div className="image-container">
              <img className="product__image" src={product.image_url} alt="" />
            </div>
            <div className="product__body">
              <h2 className="product__body__title">{product.title}</h2>
              <p>{product.short_description}</p>
              <p>
                Quantity:
                <span>{product.qty}</span>
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
              <p>
                Subtotal:
                <span>${product.total}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
