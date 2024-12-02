import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import whatsapp from "../Images/whats.webp";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        style={{
          backgroundColor: "#007bff",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1vw 2.5vw 1vw 0",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          zIndex: "10",
          top: "0",
          overflow:'hidden',
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="logo"
            src={logo}
            alt="Company Logo"
            // style={{
            //   mixBlendMode: "difference",
            // }}
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
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href={`tel:${phoneNumber}`} style={{ marginRight: "1rem",textDecoration: "none" }}>
            <button className="call-button">📞 Call Us</button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-button">
              <img className="whatsapp-icon" src={whatsapp} alt="WhatsApp Icon" />
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
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu" style={{backgroundColor:' #007bff'}}>
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
      overflow:hidden;
    }
    .nav-link {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif; 
      font-weight: 500;
      padding: 0.5vw;
      transition: color 0.3s;
      font-family: 'Poppins', sans-serif; 
      
    }
    .nav-link:hover {
      color: #000;
    }
   .call-button, .whatsapp-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: linear-gradient(45deg, #4CAF50, #1E88E5);
            color: white;
            font-size: 1rem;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            border: none;
            border-radius: 25px;
            padding: 0.7rem 1.5rem;
            cursor: pointer;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .call-button:hover, .whatsapp-button:hover {
            transform: translateY(-2px);
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
          }
          .whatsapp-button {
            background: linear-gradient(45deg, #25D366, #128C7E);
          }
          .whatsapp-icon {
            width: 20px;
             border-radius: 10px;
            height: 20px;
          }
    .whatsapp-button img {
      display: inline-block;
      vertical-align: middle;
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
      padding: 1rem;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 10vh;
      width: 100%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 9;
    }
    .mobile-link {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif; 
      padding: 1rem 0;
      text-align: center;
      font-family: 'Poppins', sans-serif; 
      

    }
    .mobile-link:hover {
      color: #000;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    @media (min-width: 768px) {
      .desktop-nav { display: flex; }
      .hamburger-menu { display: none; }
      .logo { width: 100.5px;}
    }
    @media (max-width: 768px) {
      .call-button { font-size: 0.8rem; padding: 2vw 3.5vw; }
      .whatsapp-button { display: none; } /* Hide WhatsApp button on screens smaller than 768px */
      .logo { width: 100px; }
    }
  `}
</style>

    </>
  );
};

export default Navbar;
