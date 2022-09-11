import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import footerLogo from '../../assets/images/logo_ixaya.png';

export const Footer = ({ phrase = 'Designed with' }) => {
  return (
    <>
      <footer className="footer-1 bg-gray-100">
        <div>
          <div className="container mx-auto py-8 sm:py-12">
            <div className="sm:flex sm:flex-wrap md:py-4">
              <div className="px-4 sm:w-1/2 md:w-1/3 xl:w-1/6">
                <img className="logo mb-2" src={footerLogo} alt="" />

                <div className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Autem esse iure modi nihil, quae recusandae voluptates
                  voluptatibus voluptatum?
                </div>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/3 xl:w-1/6 mt-8 sm:mt-0">
                <h5 className="text-xl font-bold mb-6">QUICK LINKS</h5>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:w-1/2 md:w-1/3 xl:w-1/6 mt-8 md:mt-0">
                <h5 className="text-xl font-bold mb-6">CONTACT</h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium culpa dolor eligendi eos error esse eum explicabo
                fuga
              </div>
              <div className="px-4 mt-4 sm:w-1/3 md:w-1/2 xl:w-1/3 sm:mx-auto xl:mt-0 xl:ml-auto">
                <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                  SUBSCRIBE TO OUR EMAIL
                </h5>
                <form className="subscribe">
                  <label className="text-sm font-medium text-gray-900 sr-only">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="email"
                      className="block p-4 pl-6 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-red-100 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2">
                      SUBSCRIBE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            {phrase}
            <FontAwesomeIcon className="icon" icon={faHeart} />
          </p>
        </div>
      </footer>
    </>
  );
};
