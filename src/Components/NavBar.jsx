import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import whatsapp from "../Images/whatsapp.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(0,170,220)",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1vw 2.5vw",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          zIndex: "10",
          top: "0",
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="logo"
            src={logo}
            alt="Company Logo"
            style={{
              width: "8vw",
              height: "10vh",
              mixBlendMode: "darken",
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <nav
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap:'5vw',
              width: "100%",
            }}
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Call Us and WhatsApp Us Buttons */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href={`tel:${phoneNumber}`} style={{ marginRight: "1rem" }}>
            <button className="call-button">Call Us</button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-button">
              <img
                style={{ width: "2vw", marginRight: "0.5rem" }}
                src={whatsapp}
                alt="WhatsApp Icon"
              />
              WhatsApp Us
            </button>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="hamburger-icon">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="mobile-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/services" className="mobile-link" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}

      <style>
        {`
        .desktop-nav {
          display: none;
        }
        .nav-link {
          color: #333;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.5vw;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #fff;
        }
        .call-button, .whatsapp-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 0.7vw 1.2vw;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          animation: pulse 1.5s infinite alternate;
        }
        .whatsapp-button {
          display: flex;
          align-items: center;
          background-color: #fff;
          color: green;
          animation: pulse1 1.5s infinite alternate;
        }
        .hamburger-icon {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 20px;
        }
        .hamburger-icon span {
          background: #333;
          height: 2px;
          width: 25px;
          border-radius: 5px;
        }
        .mobile-menu {
          background-color: rgb(0, 170, 220);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 10vh;
          width: 100%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 9;
        }
        .mobile-link {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
          padding: 1rem 0;
          text-align: center;
        }
        .mobile-link:hover {
          color: #007bff;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex; }
          .hamburger-menu { display: none; }
        }
        @media (max-width: 768px) {
          .call-button, .whatsapp-button { font-size: 0.8rem; padding: 0.5vw 1vw; }
        }
      `}
      </style>
    </>
  );
};

export default Navbar;
