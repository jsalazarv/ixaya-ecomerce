import { OrderService } from '../../services/OrderService.js';
import { useEffect, useState } from 'react';

const orderService = new OrderService();
export const Orders = () => {
  const [orderList, setOrderList] = useState([]);

  const fetchOrders = async () => {
    const {
      data: { response },
    } = await orderService.fetchOrders();
    setOrderList(response);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log(orderList);
  return (
    <>
      <h1>Orders</h1>
    </>
  );
};
