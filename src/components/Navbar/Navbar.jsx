import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartShopping,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { countCartItems } from '../../store/cart/selectors.js';

export const Navbar = () => {
  const totalCartItems = useSelector(countCartItems);
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full">
      <div className="justify-between md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-2xl font-bold text-red-100">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <FontAwesomeIcon
                    className="text-black text-2xl"
                    icon={faXmark}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-black text-2xl"
                    icon={faBars}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-red-100">
                <a href="/">Home</a>
              </li>
              <li className="text-black hover:text-red-100">
                <a href="#">Shop</a>
              </li>
              <li className="text-black hover:text-red-100">
                <a href="#">About US</a>
              </li>
              <li className="text-black hover:text-red-100">
                <a href="#">Blog</a>
              </li>
              <li className="text-black hover:text-red-100">
                <a href="#">Contact US</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 login">
              <a
                href="#"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                Sign in
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block flex items-center">
          <a href="/checkout">
            <FontAwesomeIcon
              className="text-black text-2xl mr-4"
              icon={faCartShopping}
            />
            <span className="text-black">{totalCartItems}</span>
          </a>
          <a
            href="#"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};
