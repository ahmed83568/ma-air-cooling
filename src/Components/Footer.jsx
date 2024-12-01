import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    {/* Top Section */}
    <div className="footer-top">
      <div className="footer-brand">
        <h3>MA Air Cooling Sales & Services</h3>
        <p>Providing top-quality cooling solutions and exceptional service.</p>
      </div>

      {/* Quick Links */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Phone: +91 8356876737</p>
        <p>Email: info@maaircooling.com</p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} MA Air Cooling. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path/to/facebook-icon.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path/to/instagram-icon.png" alt="Instagram" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path/to/twitter-icon.png" alt="Twitter" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;