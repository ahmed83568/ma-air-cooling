// src/pages/About.jsx
import React from 'react';
import './About.css'; // Custom styles for responsiveness and professional look

const About = () => (
  <section className="about-section">
    <div className="about-banner">
      <h1>Welcome to MA Air Cooling</h1>
      <p>Your trusted partner for innovative cooling solutions</p>
    </div>
    <div className="about-content">
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>MA Air Cooling</strong>, we strive to provide high-performance, energy-efficient cooling systems that enhance the quality of life for our customers. We aim to lead the industry through innovation, sustainability, and excellence in customer service.
        </p>
      </div>

      <div className="services-section">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Residential Cooling</h3>
            <p>
              Stay comfortable at home with our state-of-the-art air conditioning systems designed for efficiency and reliability.
            </p>
          </div>
          <div className="service-card">
            <h3>Commercial Solutions</h3>
            <p>
              Optimize your workplace environment with tailored cooling solutions for offices, warehouses, and more.
            </p>
          </div>
          <div className="service-card">
            <h3>Maintenance & Support</h3>
            <p>
              Our 24/7 maintenance services ensure your systems run smoothly all year round.
            </p>
          </div>
          <div className="service-card">
            <h3>Custom Designs</h3>
            <p>
              We provide bespoke cooling solutions tailored to your specific needs and preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>Why Choose MA Air Cooling?</h2>
        <p>
          Our team is dedicated to exceeding customer expectations with cutting-edge technology and exceptional service. Here’s what sets us apart:
        </p>
        <ul>
          <li>Environmentally friendly and energy-efficient solutions</li>
          <li>Highly skilled and certified technicians</li>
          <li>Transparent pricing and reliable service</li>
          <li>Commitment to customer satisfaction</li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Let’s Get Started</h2>
        <p>
          Ready to experience premium cooling? <a href="/contact">Contact us</a> today for a free consultation or to learn more about our services.
        </p>
      </div>
    </div>
  </section>
);

export default About;
