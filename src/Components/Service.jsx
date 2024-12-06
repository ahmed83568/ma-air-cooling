import React from 'react';
import './Service.css';
import acser from '../Images/sevicing.jpeg';
import fridgeserv from '../Images/fridgeserv.jpeg';
import wasserv from '../Images/washserv.jpeg';
import oven from '../Images/oven.jpg';
import { useEffect } from 'react';
import { gsap } from 'gsap';


const servicesData = [
  {
    title: 'Air Conditioner (AC) Services',
    image: acser,
    description: 'Expert AC installation, repair, and maintenance services to keep your space cool and comfortable.',
    price: 'Starting at ₹499',
    additional: 'Filter cleaning, and performance checks.',
  },
  {
    title: 'Refrigerator Services',
    image: fridgeserv,
    description: 'Reliable refrigerator repair and maintenance for all brands to ensure optimal cooling.',
    price: 'Starting at ₹399',
    additional: 'Covers thermostat checks, and compressor health Check.',
  },
  {
    title: 'Washing Machine Services',
    image: wasserv,
    description: 'Professional washing machine repair services to handle leaks, noise issues, and more.',
    price: 'Starting at ₹349',
    additional: 'Vary on the Basis of Detected Isuue.',
  },
  {
    title: 'Other Appliances',
    image: oven,
    description: 'Comprehensive services for microwaves, water heaters, and other home appliances.',
    price: 'Contact for pricing',
    additional: 'Covers parts replacement and general maintenance.',
  },
];

const Service = () => {
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

  useEffect(() => {
    gsap.fromTo(
      ".hero-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  
    gsap.fromTo(
      ".hero-subheading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".service-card1",
      { opacity: 0,scale:.3, },
      { opacity: 1, scale:1,duration: 1.2, stagger: .5, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".promo-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 3.5 }
    );
  }, []);
  

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      gsap.fromTo(
        ".service-card1",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.6, stagger: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        ".promo-section",
        { opacity: 0, X: -100 },
        { opacity: 1, X: 0, duration: 2, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  const handleButtonHover = (e, scale) => {
    gsap.to(e.target, { scale, duration: 0.2 });
  };
  
  

  return (
    <div className="service-container">
      <header className="hero-section">
        <h1 className="hero-heading">Affordable & Reliable Home Appliance Services</h1>
        <p className="hero-subheading">
          "Your comfort, our commitment! Get expert repair and maintenance services starting from just ₹499."
        </p>
      </header>

      <h2 className="service-heading">Our Services</h2>
      <div className="service-grid">
        {servicesData.map((service, index) => (
          <div className="service-card1" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
              <p className="service-additional">{service.additional}</p>
              <a href={`tel:${phoneNumber}`} style={{ marginRight: "auto",textDecoration: "none",display:'flex',alignItems:'center' }}>
            <button className="call-button"   onMouseEnter={(e) => handleButtonHover(e, 1.1)}
  onMouseLeave={(e) => handleButtonHover(e, 1)}>📞 Call Us</button>
             </a>
            </div>
          </div>
        ))}
      </div>

      <section className="promo-section">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✅ Trusted by over 10,000 happy customers</li>
          <li>✅ Same-day service for most appliances</li>
          <li>✅ Affordable pricing with no hidden charges</li>
          <li>✅ Experienced and certified technicians</li>
        </ul>
        <p className="promo-footer">"Your satisfaction is our priority. Let us take care of your appliances while you relax!"</p>
      </section>
    </div>
  );
};

export default Service;
