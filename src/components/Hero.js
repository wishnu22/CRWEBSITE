import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to Cranvalor</h1>
        <p className="lead">The best whey protein for men and women</p>
        <a href="#products" className="btn btn-light btn-lg">Explore Products</a>
      </div>
    </section>
  );
};

export default Hero;
