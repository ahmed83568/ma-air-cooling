import React from 'react';
import './Service.css';

const servicesData = [
  {
    title: "Air Conditioner (AC) Services",
    image: "https://via.placeholder.com/300x200?text=AC",
    description: "Expert AC installation, repair, and maintenance services to keep your space cool and comfortable.",
    price: "Starting at ₹499",
    additional: "Includes gas refilling, filter cleaning, and performance checks.",
  },
  {
    title: "Refrigerator Services",
    image: "https://via.placeholder.com/300x200?text=Refrigerator",
    description: "Reliable refrigerator repair and maintenance for all brands to ensure optimal cooling.",
    price: "Starting at ₹399",
    additional: "Covers thermostat checks, gas refilling, and compressor repairs.",
  },
  {
    title: "Washing Machine Services",
    image: "https://via.placeholder.com/300x200?text=Washing+Machine",
    description: "Professional washing machine repair services to handle leaks, noise issues, and more.",
    price: "Starting at ₹349",
    additional: "Includes drum cleaning, belt replacements, and motor repairs.",
  },
  {
    title: "Other Appliances",
    image: "https://via.placeholder.com/300x200?text=Other+Appliances",
    description: "Comprehensive services for microwaves, water heaters, and other home appliances.",
    price: "Contact for pricing",
    additional: "Covers parts replacement and general maintenance.",
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <div className="hero-section">
        <h1 className="hero-heading" style={{textAlign:'center'}}>Affordable & Reliable Home Appliance Services</h1>
        <p className="hero-subheading"  style={{textAlign:'center'}}>
          "Your comfort, our commitment! Get expert repair and maintenance services starting from just ₹499."
        </p>
      </div>

      <h2 className="service-heading">Our Services</h2>
      <div className="service-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
              <p className="service-additional">{service.additional}</p>
              <button className="service-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="promo-section">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✅ Trusted by over 10,000 happy customers</li>
          <li>✅ Same-day service for most appliances</li>
          <li>✅ Affordable pricing with no hidden charges</li>
          <li>✅ Experienced and certified technicians</li>
        </ul>
        <p className="promo-footer">"Your satisfaction is our priority. Let us take care of your appliances while you relax!"</p>
      </div>
    </div>
  );
};

export default Service;
