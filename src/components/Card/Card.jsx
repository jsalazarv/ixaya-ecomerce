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
        <button className="card__content_info_price" onClick={onClickAdd}>
          AddItem
        </button>
        <button className="card__content_info_price" onClick={onClickRemove}>
          removeItem
        </button>
        <div className="card__header">
          <img className="card_header_image" src={image} alt="" />
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
