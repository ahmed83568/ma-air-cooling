import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import { db } from "../../src/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import close from "../Images/cancel.png";
import HomeChoose from "./HomeChoose";
import Sales from "./Sales";
import whatsapp from "../Images/whats.webp";
import Footer from "./Footer";
import Service from "./Service";
import { gsap } from "gsap/gsap-core";



const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
    phone: "",
  });
  const scrollRef = useRef(null);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

  useEffect(() => {
    const handleResize = () => {
      setIsWhatsAppVisible(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    gsap.fromTo(
      ".hero-card",
      { opacity: 0, y: -100, },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  
    gsap.fromTo(
      ".hero-h1",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 }
    );
    gsap.fromTo(
      ".hero-p",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothMobile: true,
      inertia: 0.8,
    });
  
    // Cleanup
    return () => {
      scroll.destroy();
    };
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleQueryClick = () => {
    setIsFormVisible(true); // Show the form when button is clicked
  };
  const handleCancelClick = () => {
    setIsFormVisible(false); // Show the form when button is clicked
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !/^\d{10}$/.test(phone)) {
      setPhoneError(!phone ? true : false);
      alert("Please fill out the form correctly.");
      return;
    }
    try {
      await addDoc(collection(db, "queries"), formData);
      alert("Data submitted successfully!");
      setFormData({ name: "", email: "", query: "", phone: "" }); // Reset form
      setIsFormVisible(false); // Hide form after submission
    } catch (error) {
      console.error("Error adding document: ", error.message);
      alert(`Submission failed: ${error.message}`);
    }
  };

  return (
    <>

   
    <div data-scroll-container ref={scrollRef}>


      {isFormVisible && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -20%)",
            padding: "2rem",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            width: "90%",
            maxWidth: "500px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ fontSize: "1.8rem", color: "#007bff", margin: 0,width:'100%' }}>
              Submit Your Query
            </h3>
            <button
              onClick={handleCancelClick}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <img
                src={close}
                alt="Close"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="responsive-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="query">Query:</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
                placeholder="Enter your query"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}

      <HomeCarousel />

      <div className="hero-card" style={{ padding:'2vw 2.5vw', background: "linear-gradient(135deg, #0047ab, #3b82f6)",width:'90%',margin:'3vh auto',borderRadius:'20px' }}>
        <h1  className="hero-h1" style={{ textAlign: "center", fontSize: "calc(15px + 2vw)",fontWeight:'bold',color:'#fff',textTransform:'uppercase' }}>
          Welcome to M.A.Air Cooling Sales & Services
        </h1>
        <p  className="hero-p"  style={{ textAlign: "center", fontSize: "calc(8px + 1.2vw)",textTransform:'uppercase',color:'#fff' }}>
          Your trusted solution for air cooling sales, services, and spare
          parts.
        </p>
      </div>
      <Service/>

      {/* Why Choose Us Section */}

      {/* Sales and Services Section */}
      <Sales />
      <HomeChoose />

      {/* Footer */}
      <Footer/>
    </div>
    <button
        onClick={handleQueryClick}
        className="any-query-button"
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Any Query?
      </button>

      {isWhatsAppVisible && (
        <a
          style={{ textDecoration: "none" }}
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20have%20a%20query%20regarding%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="whatsapp-button1"
            style={{
              position: "fixed",
              top: "15%",
              left: "2%",
              outline: "none",
              border: "none",
              borderRadius: "50%",
              zIndex: "100",
              width: "60px",
              height: "60px",
              backgroundColor: "#25D366",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.2)";
              e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
            }}
          >
            <img
              style={{
                width: "70%",
                filter: "brightness(1.5)",
                borderRadius: "18px",
              }}
              src={whatsapp}
              alt="WhatsApp Icon"
            />
          </button>
        </a>
      )}
      </>
  );
};

export default Home;
