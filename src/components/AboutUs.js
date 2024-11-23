import React from 'react';
import './AboutUs.css';
import companyImage from '../images/gfincr.jpg';
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h2 className="text-center mb-5">About Cranvalor Innovations</h2>
        <div className="row">
          <div className="col-md-6">
          <img src={companyImage} alt="About Cranvalor" className="about-img" />
          </div>
          <div className="col-md-6">
            <h3>Who We Are</h3>
            <p>
              Cranvalor Innovations Pvt. Ltd. is a leader in providing high-quality whey protein and nutritional supplements for both men and women. Founded with the vision to offer affordable, premium products, we are committed to improving health and wellness worldwide.
            </p>
            <h4>Our Mission</h4>
            <p>
              To provide high-quality, affordable, and effective nutritional products that empower individuals to lead healthier lives. We strive to make wellness accessible to all and continuously innovate to meet our customers’ needs.
            </p>
            <h4>Our Vision</h4>
            <p>
              To become the most trusted brand in the health and nutrition sector, promoting fitness, well-being, and vitality through our range of supplements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
