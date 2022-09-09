import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OrderService } from '../../services/OrderService.js';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { ShippingDetails } from '../../components/ShippingDetails/ShippingDetails';
import { BillingDetails } from '../../components/BillingDetails/BillingDetails';

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
      <div className="wrap wrap-margin">
        <h1 className="text-3xl">Order details: {orderDetail.order_code}</h1>

        <div className="order-details">
          <ShippingDetails
            address={orderDetail.address}
            city={orderDetail.city}
            state={orderDetail.state}
            zipCode={orderDetail.zip_code}
            phone={orderDetail.phone}
          />
          <BillingDetails
            subtotal={orderDetail.subtotal}
            discount={orderDetail.discount}
            total={orderDetail.total}
          />
        </div>

        <h1 className="text-2xl">Products</h1>
        {orderDetail.products.map((product, index) => (
          <ProductItem product={product} key={`item-${index}`} />
        ))}
      </div>
    </>
  );
};
