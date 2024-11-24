import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/cranlogo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <a className="navbar-brand" href="">
        <img
          src={logo}
          alt="Cranvalor Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        Cranvalor
      </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
