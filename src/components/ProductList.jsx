import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <div className="row g-4">
      {products.map((prod) => (
        <div key={prod.id} className="col-12 col-md-6 col-lg-4">
          <ProductCard product={prod} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
