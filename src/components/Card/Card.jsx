export const Card = ({ image = '', category, title, price }) => {
  return (
    <>
      <div className="card">
        <div className="card__header">
          <img className="card__header__image" src={image} alt="" />
        </div>
        <div className="card__content">
          <span className="card__content_category">{category}</span>
          <div className="card__content_info">
            <span className="card__content_info_title">{title}</span>
            <span className="card__content_info_price">{price}</span>
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
