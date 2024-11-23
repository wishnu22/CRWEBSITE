import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <h3>Whey Protein Manufacturing</h3>
          <p>We offer high-quality whey protein in various forms to meet diverse needs, from unflavored isolated protein to custom-flavored options.</p>
        </div>
        <div className="service-item">
          <h3>Private Labeling</h3>
          <p>We provide private labeling options, allowing businesses to sell whey protein under their own brand with full customization.</p>
        </div>
        <div className="service-item">
          <h3>Packaging & Distribution</h3>
          <p>We handle packaging and distribution, ensuring our clients receive their products in perfect condition and on time.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
