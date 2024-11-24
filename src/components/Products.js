import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="container" id="products">
      <h2 className="text-center my-4">Our Products</h2>
      <div className="products">
        <div className="product">
          <img src="/images/chocolate-whey-protein.jpg" alt="Chocolate Whey Protein" />
          <h3>Chocolate Whey Protein</h3>
          <p>Rich chocolate flavor with high protein content.</p>
        </div>
        <div className="product">
          <img src="/images/vanilla-whey-protein.jpg" alt="Vanilla Whey Protein" />
          <h3>Vanilla Whey Protein</h3>
          <p>Classic vanilla taste for daily nutrition.</p>
        </div>
        <div className="product">
          <img src="/images/strawberry-whey-protein.jpg" alt="Strawberry Whey Protein" />
          <h3>Strawberry Whey Protein</h3>
          <p>Delicious strawberry flavor for fitness enthusiasts.</p>
        </div>
        <div className="product">
          <img src="/images/mango-whey-protein.jpg" alt="Mango Whey Protein" />
          <h3>Mango Whey Protein</h3>
          <p>Exotic mango blend with superior protein content.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
