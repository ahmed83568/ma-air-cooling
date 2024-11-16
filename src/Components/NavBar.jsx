// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import whatsapp from "../Images/whatsapp.jpeg";

const Navbar = () => {
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

  console.log(phoneNumber)
  return(
  <>
    <div
      style={{
        backgroundColor: 'rgb(0,170,220)',
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1vw 2.5vw",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        position:'sticky',
        zIndex:'10',
        top:'0'
      }}
    >
      <div style={{ display: "flex", alignItems: "center", }}>
        <img
          src={logo}
          alt="Company Logo"
          style={{
            width: "8vw",
            height: "10vh",
            mixBlendMode: "darken",
          }}
        />
      </div>

      <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#333",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0.5vw",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: "#333",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0.5vw",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            About
          </Link>
          <Link
            to="/services"
            style={{
              color: "#333",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0.5vw",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            Services
          </Link>
          <Link
            to="/contact"
            style={{
              color: "#333",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0.5vw",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <a href={`tel:${phoneNumber}`}>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "0.7vw 1.2vw",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            animation: "pulse 1.5s infinite alternate", // Applying the new animation here
          }}
        >
          Call Us
        </button>
      </a>
      <a style={{textDecoration:'none'}}
  href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20services`}
  target="_blank"
  rel="noopener noreferrer"
>
  <div style={{}}>
    <button 
      style={{
        display: 'flex', 
        alignItems: 'center',
        backgroundColor: "#fff",
        color: 'green',
        border: 'none',
        borderRadius: '5px',
        padding: '0.7vw 1.2vw',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        animation: 'pulse1 1.5s infinite alternate',
      }}
    >
      <img style={{width: '2vw'}} src={whatsapp} alt="WhatsApp Icon" />
      WhatsApp Us
    </button>
  </div>
</a>

      <style>
        {`
    @keyframes pulse {
      0% {
        background-color: #007bff;
        transform: scale(1);
      }
      100% {
        background-color: #0056b3;
        transform: scale(1.1); /* Slightly larger size */
      }
    }
  `}
        {`
    @keyframes pulse1 {
      0% {
        background-color: #fff;
        transform: scale(1);
      }
      100% {
        background-color: #fff;
        transform: scale(1.1); /* Slightly larger size */
      }
    }
  `}
      </style>
    </div>

    {/* Responsive Styles */}
    <style>
      {`
        @media (max-width: 768px) {
          .nav-container {
            flex-direction: column;
            padding: 1rem;
          }
          img {
            width: 30%;
            height: auto;
          }
          nav {
            flex-direction: column;
            align-items: center;
          }
          nav a {
            padding: 0.5rem 0;
          }
          button {
            width: 100%;
            margin-top: 0.5rem;
          }
        }
      `}
    </style>
  </>
);

}


export default Navbar;
