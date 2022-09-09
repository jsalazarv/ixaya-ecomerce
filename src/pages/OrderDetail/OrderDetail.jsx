import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OrderService } from '../../services/OrderService.js';

export const OrderDetail = () => {
  const params = useParams();
  const orderService = new OrderService();
  const [orderDetail, setOrderDetail] = useState();

  useEffect(() => {
    getOrderDetail();
  }, [params.id]);

  const getOrderDetail = async () => {
    const payload = {
      order_id: params.id,
    };

    const {
      data: { response },
    } = await orderService.fetchOrderDetail(payload);

    console.log(response);
    setOrderDetail(response);
  };

  return (
    <>
      <h1>Order detail</h1>
      <div>{JSON.stringify(orderDetail)}</div>
    </>
  );
};
