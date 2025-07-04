import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  // Validate product data
  if (!product || typeof product !== 'object') {
    console.error('Invalid product data:', product);
    return (
      <div className={styles.errorCard}>
        <p>Error loading product information</p>
      </div>
    );
  }

  // Destructure with fallbacks
  const {
    id,
    name = 'Product Name Not Available',
    description = 'No description provided',
    price = 'N/A',
    image = 'https://placekitten.com/300/200?text=No+Image'
  } = product;

  // Format price if it's not already formatted
  const formattedPrice = typeof price === 'number' 
    ? `$${price.toFixed(2)}` 
    : price;

  return (
    <div className={styles.card} key={id}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={name} 
          className={styles.productImage}
          onError={(e) => {
            e.target.src = 'https://placekitten.com/300/200?text=Image+Not+Found';
          }}
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.priceContainer}>
          <span className={styles.productPrice}>{formattedPrice}</span>
          <button className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
  }).isRequired,
};

export default ProductCard;