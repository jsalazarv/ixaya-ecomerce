import { ProductService } from '../../../../services/ProductService.js';
import { Card } from '../../../../components/Card/Card.jsx';
import { useEffect, useState } from 'react';
import { chunk } from '../../../../utilities/arrays.js';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../../../store/cart/index.js';

const productService = new ProductService();

const colors = [
  'bg_gradient_graphite',
  'bg_gradient_honey',
  'bg_gradient_strawberry',
  'bg_gradient_shark',
  'bg_gradient_lime',
  'bg_gradient_sky',
];

export const Products = () => {
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
      <div className="mb-8 w-full flex flex-col">
        {productList.map((row, index) => {
          const isPar = index % 2 === 0;
          const rowClass = isPar ? 'row-right' : 'row-left';
          return (
            <div
              key={index}
              className={`mb-8 p-2 w-full flex flex-wrap bg-grey-light ${rowClass}`}>
              {row.map((product) => {
                const color = getColor(colors, colorIndex);
                colorIndex = color.nextIndex;
                return (
                  <div key={product.id} className={`w-full item`}>
                    <Card
                      color={color.name}
                      image={product.image_url}
                      category={product.category}
                      title={product.title}
                      price={product.price}
                      description={product.short_description}
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
    </>
  );
};
