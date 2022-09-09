import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { ProductService } from '../../services/ProductService.js';
import { Card } from '../../components/Card/Card';
import { chunk } from '../../utilities/arrays.js';
import { addItem, removeItem } from '../../store/cart/index.js';

const productService = new ProductService();

const colors = [
  'bg_gradient_graphite',
  'bg_gradient_honey',
  'bg_gradient_strawberry',
  'bg_gradient_shark',
  'bg_gradient_lime',
  'bg_gradient_sky',
];

export const BestSeller = () => {
  let colorIndex = 0;
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const {
      data: { response },
    } = await productService.fetchProducts();
    const chunks = chunk(response, 3);
    setProductList(chunks);
  };

  const getColor = (colorList = [], colorIndex = 0) => {
    const name = colorList[colorIndex];
    const nextColorIndex = colorIndex + 1;
    const nextIndex = nextColorIndex < colorList.length ? nextColorIndex : 0;
    return { name, nextIndex };
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
      <div className="bestseller__content">
        <div className="w-full flex">
          {productList.map((row, index) => {
            return (
              <div key={index} className={`w-full flex w-full`}>
                {row.map((product) => {
                  const color = getColor(colors, colorIndex);
                  colorIndex = color.nextIndex;
                  return (
                    <div key={product.id} className={`w-full item`}>
                      <Card
                        image={product.image_url}
                        title={product.title}
                        price={product.price}
                        onClickAdd={() => dispatch(addItem(product))}
                        onClickRemove={() => dispatch(removeItem(product))}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
