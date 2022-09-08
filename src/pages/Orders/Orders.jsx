import { OrderService } from '../../services/OrderService.js';
import { useEffect, useState } from 'react';

const orderService = new OrderService();
export const Orders = () => {
  const [orderList, setOrderList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchOrders = async () => {
    const {
      data: { response },
    } = await orderService.fetchOrders();
    setOrderList(response);
    setFilteredList(response);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const search = (event) => {
    const { target } = event;
    const newList = orderList.filter((item) =>
      item.order_code.includes(target.value),
    );

    setFilteredList(newList);
  };

  return (
    <>
      <h1>Orders</h1>
      <input type="text" onChange={search} />
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Order code
              </th>
              <th scope="col" className="py-3 px-6">
                Quantity Items
              </th>
              <th scope="col" className="py-3 px-6">
                Subtotal
              </th>
              <th scope="col" className="py-3 px-6">
                Discount
              </th>
              <th scope="col" className="py-3 px-6">
                Total
              </th>
              <th scope="col" className="py-3 px-6">
                Paid
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((order) => {
              return (
                <tr
                  key={order.order_code}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order.order_code}
                  </td>
                  <td className="py-4 px-6">{order.products.length}</td>
                  <td className="py-4 px-6">{order.subtotal}</td>
                  <td className="py-4 px-6">{order.discount}</td>
                  <td className="py-4 px-6">{order.total}</td>
                  <td className="py-4 px-6">{order.paid}</td>
                  <td className="py-4 px-6">
                    <button>View</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
