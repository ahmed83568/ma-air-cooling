import React from "react";
import "./About.css";
import ac from "../Images/osama.jpg"

const About = () => (
  <section className="about-section">
    <div className="about-banner">
      <h1>Welcome to MA Air Cooling</h1>
      <p>Innovative Cooling Solutions for Every Space</p>
      <button className="cta-button">Discover More</button>
    </div>
    <div className="about-content">
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>MA Air Cooling</strong>, we aim to revolutionize cooling technology with innovative, 
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

      <div className="values-section">
        <h2>Why Choose Us?</h2>
        <ul className="values-list">
          <li>Innovative, environmentally conscious designs</li>
          <li>Experienced and certified cooling experts</li>
          <li>Uncompromised commitment to quality and transparency</li>
          <li>24/7 Customer support and reliable service</li>
        </ul>
      </div>

      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={ac} alt="Team Member 1" />
            <h3>Osama Qureshi</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src={ac} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Engineering</p>
          </div>
          <div className="team-card">
            <img src={ac} alt="Team Member 3" />
            <h3>Emily Brown</h3>
            <p>Customer Experience Manager</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <p>
              “The team at MA Air Cooling exceeded our expectations with their innovative solutions and 
              exceptional customer service.”
            </p>
            <h3>- Mohd Irfan</h3>
          </div>
          <div className="testimonial-card">
            <p>
              “I highly recommend MA Air Cooling for their professionalism and cutting-edge cooling systems.”
            </p>
            <h3>- Ahmed Raza</h3>
          </div>
        </div>
      </div>

      <div className="awards-section">
        <h2>Achievements & Certifications</h2>
        <div className="awards-grid">
          <div className="award-card">
            <img src={ac} alt="Award 1" />
            <h4>Best Cooling Solutions 2023</h4>
          </div>
          <div className="award-card">
            <img src={ac} alt="Award 2" />
            <h4>Energy Efficiency Star 2022</h4>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Let’s Get Started</h2>
        <p>
          Ready to redefine cooling? <a href="/contact">Contact us</a> today for personalized consultation and
          cutting-edge solutions.
        </p>
      </div>
    </div>
  </section>
);

export default About;
