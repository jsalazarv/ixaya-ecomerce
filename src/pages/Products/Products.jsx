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
      <h1>Products</h1>
      {productList.map((product) => (
        <Card
          key={product.id}
          image={product.image_url}
          category={product.category}
          title={product.title}
          price={`$\`${product.price}\``}
        />
      ))}
    </>
  );
};
