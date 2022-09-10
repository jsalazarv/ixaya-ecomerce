import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductService } from '../../services/ProductService.js';
import { Card } from '../../components/Card/Card';
import { chunk } from '../../utilities/arrays.js';
import { addItem, removeItem } from '../../store/cart/index.js';

const productService = new ProductService();

export const BestSeller = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const {
      data: { response },
    } = await productService.fetchProducts();
    const chunks = chunk(response, 3);
    setProductList(chunks);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bestseller__banner">
        <h2 className="bestseller__title">BEST SELLER PRODUCTS</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="bestseller__content w-full">
        <div className="card-container w-full item">
          {productList.map((row) =>
            row.map((product, index) => {
              return (
                <Card
                  key={index}
                  image={product.image_url}
                  title={product.title}
                  price={product.price}
                  onClickAdd={() => dispatch(addItem(product))}
                  onClickRemove={() => dispatch(removeItem(product))}
                />
              );
            }),
          )}
        </div>
      </div>
    </>
  );
};
