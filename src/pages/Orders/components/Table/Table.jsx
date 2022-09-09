import { OrderService } from '../../../../services/OrderService.js';
import { useEffect, useState } from 'react';
import {
  faCheck,
  faClock,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const orderService = new OrderService();
export const Table = () => {
  const [orderList, setOrderList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const navigate = useNavigate();

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

  const detail = (id) => {
    navigate(`/orders/${id}`);
  };

  return (
    <>
      <div className="wrap wrap-margin">
        <h1 className="text-3xl">Mis pedidos</h1>

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
                  <span className="font-black">Order code</span>
                </th>
                <th scope="col">
                  <span className="font-black">Quantity Items</span>
                </th>
                <th scope="col">
                  <span className="font-black">Subtotal</span>
                </th>
                <th scope="col">
                  <span className="font-black">Discount</span>
                </th>
                <th scope="col">
                  <span className="font-black">Total</span>
                </th>
                <th scope="col">
                  <span className="font-black">Paid</span>
                </th>
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
                    <td>{order.products.length}</td>
                    <td>${order.subtotal}</td>
                    <td>${order.discount}</td>
                    <td>
                      <span className="table__body__tr__td__total">
                        ${order.total}
                      </span>
                    </td>
                    <td>
                      {order.paid == 1 ? (
                        <span className="bg-green-600 table__body__tr__td__paid">
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                      ) : (
                        <span className="bg-amber-500 table__body__tr__td__paid">
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                      )}
                    </td>
                    <td>
                      <button
                        className="table__body__tr__td__button"
                        onClick={() => detail(order.id)}>
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
