export const Card = ({
  image = '',
  category,
  title,
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
            <span className="card__content_info_title">{title}</span>
          </div>
          <div className="button">
            <span className="card__content_info_price">{price}</span>
            <button className="card__content_info_price" onClick={onClickAdd}>
              Buy
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
