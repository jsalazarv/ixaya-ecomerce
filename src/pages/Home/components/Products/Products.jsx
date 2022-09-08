import { ProductService } from '../../../../services/ProductService.js';
import { Card } from '../../../../components/Card/Card.jsx';
import { useEffect, useState } from 'react';
import { chunk } from '../../../../utilities/arrays.js';

const productService = new ProductService();
export const Products = () => {
  const [productList, setProductList] = useState([]);

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
      <div className="mb-8 p-2 w-full flex flex-col">
        {productList.map((row, index) => {
          const isPar = index % 2 === 0;
          const rowClass = isPar ? 'row-right' : 'row-left';
          return (
            <div
              key={index}
              className={`mb-8 p-2 w-full flex flex-wrap bg-grey-light ${rowClass}`}>
              {row.map((product, index) => (
                <div key={product.id} className={`w-full item`}>
                  <Card
                    image={product.image_url}
                    category={product.category}
                    title={product.title}
                    price={`$\`${product.price}\``}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
