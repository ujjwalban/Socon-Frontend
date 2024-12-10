import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center">
      <div className="container p-4">
        <h5 className="text-uppercase mb-3">About Us</h5>
        <p className="mb-4">
          Empowering businesses with AI-driven solutions to achieve smarter
          outcomes.
        </p>
        <ul className="list-unstyled d-flex justify-content-center mb-3">
          <li className="mx-3">
            <a
              href="/privacy-policy"
              className="text-secondary text-decoration-none"
            >
              Privacy Policy
            </a>
          </li>
          <li className="mx-3">
            <a href="/terms" className="text-secondary text-decoration-none">
              Terms of Service
            </a>
          </li>
          <li className="mx-3">
            <a href="/contact" className="text-secondary text-decoration-none">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div
        className="text-center py-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        © 2024 SOCON.AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
