import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials py-5">
      <div className="container">
        <h2 className="text-center mb-5">What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Cranvalor's whey protein has helped me achieve my fitness goals faster. Highly recommend!"</p>
                <footer className="blockquote-footer">John Doe</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Great taste and excellent quality! Best whey protein on the market."</p>
                <footer className="blockquote-footer">Jane Smith</footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
