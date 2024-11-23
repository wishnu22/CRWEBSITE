import React from 'react';
import './Products.css';

const products = [
  { id: 1, name: 'Premium Whey Protein 1kg', price: '₹2,499', image: 'https://via.placeholder.com/250' },
  { id: 2, name: 'Whey Protein Isolate 500g', price: '₹1,499', image: 'https://via.placeholder.com/250' },
  { id: 3, name: 'Flavored Whey Protein 1kg', price: '₹2,999', image: 'https://via.placeholder.com/250' },
  { id: 4, name: 'Protein Sample Pack', price: '₹499', image: 'https://via.placeholder.com/250' },
];

const Products = () => {
  return (
    <section className="products py-5" id="products">
      <div className="container">
        <h2 className="text-center mb-5">Our Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <a href="#!" className="btn btn-success">Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
