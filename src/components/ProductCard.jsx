import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">{product.price}</span>
          <button className="btn btn-primary btn-sm">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
