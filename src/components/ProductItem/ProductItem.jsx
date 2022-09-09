export const ProductItem = ({ product = {} }) => {
  return (
    <div className="product-container">
      <div className="image-container">
        <img className="product__image" src={product.image_url} alt="" />
      </div>
      <div className="product__body">
        <h2 className="product__body__title">{product.title}</h2>
        <p>{product.short_description}</p>
        <p>
          Quantity:
          <span>{product.qty}</span>
        </p>
        <p>
          Unit price:
          <span>${product.price}</span>
        </p>
        <p>
          Discount:
          <span className="discount">- ${product.discount}</span>
        </p>
      </div>
      <div className="product__info">
        <p>
          Subtotal:
          <span>${product.total}</span>
        </p>
      </div>
    </div>
  );
};
