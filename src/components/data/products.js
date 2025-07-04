import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';
import styles from './ProductList.module.css';

const ProductList = () => {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;