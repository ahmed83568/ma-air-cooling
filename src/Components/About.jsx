import React, { useEffect } from "react";
import "./About.css";
import ac from "../Images/osama.jpg"
import certificate from "../Images/certificate.jpg"
import { Link } from "react-router-dom";
import certificate1 from "../Images/certificate1.jpg"
import certificate2 from "../Images/certificate2.jpg"
import HomeChoose from "./HomeChoose";
import { gsap } from "gsap";


const About = () => {
  useEffect(() => {
    // GSAP animation for the awards grid items
    gsap.fromTo(
      ".award-card",
      {
        opacity: 0,
        y: -50, // Start from 50px below
        scale: 0.3, // Start scaled down
      },
      {
        opacity: 1,
        y: 0, // End at normal position
        scale: 1, 
        delay:2.4,// End at normal scale
        duration: .8,
        stagger: 0.3, // Stagger the animations for each card
      }
    );
  }, []);

    return(

  <section className="about-section">
    <div className="about-banner">
      <h1>Welcome to M.A.Air Cooling</h1>
      <p>Innovative Cooling Solutions for Every Space</p>
      <button className="cta-button">Discover More</button>
    </div>
    <div className="about-content">
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>M.A.Air Cooling</strong>, we aim to revolutionize cooling technology with innovative, 
          energy-efficient solutions tailored to modern living. We’re committed to enhancing comfort while 
          promoting sustainability through exceptional products and services.
        </p>
        <p>
          From homes to businesses, our cooling systems redefine reliability, efficiency, and user satisfaction.
        </p>
      </div>

      <div className="services-section">
        <h2>Our Expertise</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Residential Cooling</h3>
            <p>
              Sleek, quiet, and energy-saving cooling systems designed to transform your home into a haven of comfort.
            </p>
          </div>
          <div className="service-card">
            <h3>Commercial Solutions</h3>
            <p>
              Innovative and scalable cooling solutions designed to optimize your business operations.
            </p>
          </div>
          <div className="service-card">
            <h3>Smart Maintenance</h3>
            <p>
              Proactive 24/7 support and regular maintenance to ensure seamless operation of your cooling systems.
            </p>
          </div>
          <div className="service-card">
            <h3>Custom Designs</h3>
            <p>
              Tailored cooling solutions to meet unique needs, combining cutting-edge design with unmatched functionality.
            </p>
          </div>
        </div>
      </div>
        <HomeChoose/>

      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <p>
              “The team at M.A.Air Cooling exceeded our expectations with their innovative solutions and 
              exceptional customer service.”
            </p>
            <h3>- Arbaz Shaikh</h3>
          </div>
          <div className="testimonial-card">
            <p>
              “I highly recommend M.A.Air Cooling for their professionalism and cutting-edge cooling systems.”
            </p>
            <h3>- Ahmed Raza</h3>
          </div>
        </div>
      </div>

      <div className="awards-section">
        <h2>Achievements & Certifications</h2>
        <div className="awards-grid">
        <div className="award-card">
            <img src={certificate2} alt="Award 1" />
            <h4>Best Cooling Solutions 2022</h4>
          </div>
        <div className="award-card">
            <img src={certificate1} alt="Award 1" />
            <h4>Best Cooling Solutions 2023</h4>
          </div>
          <div className="award-card">
            <img src={certificate} alt="Award 1" />
            <h4>Best Cooling Solutions 2024</h4>
          </div>
         
        </div>
      </div>

      <div className="contact-section">
        <h2>Let’s Get Started</h2>
        <p>
          Ready to redefine cooling? <Link to="/contactus">Contact us</Link> today for personalized consultation and
          cutting-edge solutions.
        </p>
      </div>
    </div>
  </section>
)};

export default About;
