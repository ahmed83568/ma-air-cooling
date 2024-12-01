import React from 'react';
import './HomeChoose.css'; // Separate CSS file for better maintainability

const HomeChoose = () => {
  return (
    <section className="home-choose-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="choose-us-container">
        {/* Card 1 */}
        <div className="choose-us-card">
          <h3 className="card-title" style={{color:'#007bff'}}>Experienced Technicians</h3>
          <p className="card-description">
            Our team is highly skilled with years of experience in air cooling solutions, ensuring top-notch service.
          </p>
        </div>
        {/* Card 2 */}
        <div className="choose-us-card">
          <h3 className="card-title" style={{color:'#007bff'}}>Quality Products</h3>
          <p className="card-description">
            We provide a wide range of quality air cooling products from leading brands, ensuring reliability and efficiency.
          </p>
        </div>
        {/* Card 3 */}
        <div className="choose-us-card">
          <h3 className="card-title" style={{color:'#007bff'}}>Affordable Pricing</h3>
          <p className="card-description">
            Our services and products are priced competitively to provide the best value without compromising on quality.
          </p>
        </div>
        {/* Card 4 */}
        <div className="choose-us-card">
          <h3 className="card-title" style={{color:'#007bff'}}>Excellent Customer Service</h3>
          <p className="card-description">
            We are committed to providing excellent customer support and are always available to address your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeChoose;
