import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
const Products = () => {
  const [products]  = useState(productsData);


  return ( 
    <section>
      {products.map(product => <Product key={product.id} id={product.id} name={product.name} title={product.title} colors={product.colors} sizes={product.sizes} basePrice={product.basePrice} />)}
      {/* <Product {...products[0]} />
      <Product {...products[1]} />
      <Product {...products[2]} /> */}
    </section>
  );
};
export default Products;