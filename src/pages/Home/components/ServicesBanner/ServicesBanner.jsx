import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faHeadphones,
  faMoneyBill1Wave,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons';

export const ServicesBanner = () => {
  return (
    <>
      <div className="services-banner">
        <div className="services-banner__benefit">
          <span className="benefit__icon">
            <FontAwesomeIcon icon={faTruckFast} />
          </span>
          <div className="benefit__description">
            <h2 className="benefit__title">Free Shipping</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="services-banner__benefit">
          <span className="benefit__icon">
            <FontAwesomeIcon icon={faCertificate} />
          </span>
          <div className="benefit__description">
            <h2 className="benefit__title">Money Guarantee</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="services-banner__benefit">
          <span className="benefit__icon">
            <FontAwesomeIcon icon={faHeadphones} />
          </span>
          <div className="benefit__description">
            <h2 className="benefit__title">Online Support 24/7</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="services-banner__benefit">
          <span className="benefit__icon">
            <FontAwesomeIcon icon={faMoneyBill1Wave} />
          </span>
          <div className="benefit__description">
            <h2 className="benefit__title">Secure Payment</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </>
  );
};
