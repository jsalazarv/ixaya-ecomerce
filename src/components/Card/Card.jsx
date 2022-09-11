import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Card = ({
  image = '',
  category,
  title,
  description,
  price,
  color = 'bg_gradient_shark',
  onClickAdd = () => null,
  onClickRemove = () => null,
}) => {
  return (
    <>
      <div className={`card ${color}`}>
        <div className="card__header">
          <img className="card__header__image" src={image} alt="" />
        </div>
        <div className="card__content">
          <span className="card__content_category">{category}</span>
          <div className="card__content_info">
            <span className="card__content_info_title truncate">{title}</span>
            <p className="card__content_info_description">{description}</p>
          </div>
          <div className="button-container">
            <span className="card__content_info_price">${price}</span>
            <button
              className="card__content_info_price bg-amber-500 border-amber-600 text-black shadow-3xl hover:bg-amber-600"
              onClick={onClickAdd}>
              Add to cart
              <FontAwesomeIcon className="ml-3" icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  image: '',
  title: 'Product',
  subtitle: 'Price',
};
