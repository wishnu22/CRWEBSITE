import React from "react";
import "./AboutUs.css";
import companyImage from '../images/gfincr.jpg';
const AboutUs = () => {
  return (
    <section className="about-us py-5" id="about">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Side: Image */}
          <div className="col-lg-6 text-center">
          <img src={companyImage} alt="About Cranvalor" className="about-img" />
          </div>

          {/* Right Side: Text */}
          <div className="col-lg-6">
            <h3 className="about-title">Who We Are</h3>
            <p className="about-text">
              Cranvalor Innovations Pvt. Ltd. is a leader in providing high-quality whey protein and nutritional supplements for both men and women. Founded with the vision to offer affordable, premium products, we are committed to improving health and wellness worldwide.
            </p>
            <h4 className="about-subtitle">Our Mission</h4>
            <p className="about-text">
              To provide high-quality, affordable, and effective nutritional products that empower individuals to lead healthier lives. We strive to make wellness accessible to all and continuously innovate to meet our customers’ needs.
            </p>
            <h4 className="about-subtitle">Our Vision</h4>
            <p className="about-text">
              To become the most trusted brand in the health and nutrition sector, promoting fitness, well-being, and vitality through our range of supplements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
