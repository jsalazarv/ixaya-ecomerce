import { OrderService } from '../../../../services/OrderService.js';
import { useEffect, useState } from 'react';
import {
  faCheck,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const orderService = new OrderService();
export const Table = () => {
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
      <div className="input-container">
        <div className="flex-1 pr-4">
          <div className="relative md:w-1/3">
            <input
              type="search"
              className="input"
              placeholder="  Search"
              onChange={search}
            />
            <div className="input__icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
      </div>

      <div className="orders-container">
        <table className="table">
          <thead className="table__head">
            <tr>
              <th scope="col" className="py-6 px-6">
                Order code
              </th>
              <th scope="col">Quantity Items</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Discount</th>
              <th scope="col">Total</th>
              <th scope="col">Paid</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table__body">
            {filteredList.map((order) => {
              return (
                <tr key={order.order_code} className="table__body__tr">
                  <td scope="row" className="table__body__tr__td">
                    {order.order_code}
                  </td>
                  <td className="py-4 px-6">{order.products.length}</td>
                  <td className="py-4 px-6">{order.subtotal}</td>
                  <td className="py-4 px-6">{order.discount}</td>
                  <td className="py-4 px-6">
                    <span className="table__body__tr__td__total">
                      {order.total}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {order.paid == 1 ? (
                      <span className="bg-green-600 table__body__tr__td__paid">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    ) : (
                      <span className="bg-red-100 table__body__tr__td__paid">
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <button className="table__body__tr__td__button">
                      View
                    </button>
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
