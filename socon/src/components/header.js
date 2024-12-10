import React from "react";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#121212" }} // Dark background
      >
        <div className="container">
          {/* Brand Logo and Name */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="Logo"
              className="me-2"
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
            />
            <span className="fw-bold text-light">SOCON.AI</span>
          </a>

          {/* Mobile Navbar Toggle Button */}
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

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "About", "Contact"].map((item) => (
                <li className="nav-item" key={item.toLowerCase()}>
                  <a
                    className="nav-link text-secondary text-uppercase fw-bold"
                    href={`/${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
