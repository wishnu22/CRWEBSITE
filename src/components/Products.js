// src/components/Products.js
import React from 'react';
import './Products.css'
const Products = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <img
          src="../../images/vanila.jpg" // Make sure the image path is correct
          alt="Chocolate Whey Protein"
        />
        <h4>Chocolate Whey Protein</h4>
        <p>Premium quality whey protein with rich chocolate flavor.</p>
      </div>

      <div className="product-card">
        <img
          src="C:\Users\user\Documents\website\CRWEBSITE\src\images\vanila.jpg" // Make sure the image path is correct
          alt="Vanilla Whey Protein"
        />
        <h4>Vanilla Whey Protein</h4>
        <p>Delicious vanilla flavor, packed with high-quality protein.</p>
      </div>

      <div className="product-card">
        <img
          src="/images/strawberry-whey-protein.jpg" // Make sure the image path is correct
          alt="Strawberry Whey Protein"
        />
        <h4>Strawberry Whey Protein</h4>
        <p>Fresh and fruity strawberry flavor, with 100% pure whey protein.</p>
      </div>

      <div className="product-card">
        <img
          src="/images/mango-whey-protein.jpg" // Make sure the image path is correct
          alt="Mango Whey Protein"
        />
        <h4>Mango Whey Protein</h4>
        <p>Tropical mango flavor for your fitness goals with clean protein.</p>
      </div>
    </div>
  );
}

export default Products;
