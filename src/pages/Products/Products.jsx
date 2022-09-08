import { ProductService } from '../../services/ProductService.js';
import { Card } from '../../components/Card/Card';
import { useEffect, useState } from 'react';

const productService = new ProductService();
export const Products = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const {
      data: { response },
    } = await productService.fetchProducts();
    setProductList(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="mb-8 p-2 w-full flex flex-wrap bg-grey-light">
        {productList.map((product) => (
          <div
            key={product.id}
            className={`border-8 w-full md:w-1/2 
            ${product.id % 3 === 0 ? 'lg:w-1/2' : 'lg:w-1/4'}
            ${product.id === 4 ? 'lg:w-1/2' : 'lg:w-1/4'}
            `}>
            <Card
              image={product.image_url}
              category={product.category}
              title={product.title}
              price={`$\`${product.price}\``}
            />
          </div>
        ))}
      </div>
    </>
  );
};
