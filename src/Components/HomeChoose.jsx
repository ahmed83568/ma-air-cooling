import React, { useEffect } from 'react';
import './HomeChoose.css';
import { use } from 'react';
import { gsap } from 'gsap/gsap-core';

const HomeChoose = () => {

  useEffect(()=>{
    gsap.fromTo(".home-choose-section",{
      opacity:0,x:-300,
    },{
      opacity:1,delay:6,duration:1.5,x:0,
    })
  },[])
  return (
    <section className="home-choose-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="choose-us-container">
        {/* Card 1 */}
        <div className="choose-us-card">
          <div className="icon-wrapper">
            <i className="fas fa-user-tie"></i>
          </div>
          <h3 className="card-title">Experienced Technicians</h3>
          <p className="card-description">
            Our team is highly skilled with years of experience in air cooling solutions, ensuring top-notch service.
          </p>
        </div>
        {/* Card 2 */}
        <div className="choose-us-card">
          <div className="icon-wrapper">
            <i className="fas fa-box"></i>
          </div>
          <h3 className="card-title">Quality Products</h3>
          <p className="card-description">
            We provide a wide range of quality air cooling products from leading brands, ensuring reliability and efficiency.
          </p>
        </div>
        {/* Card 3 */}
        <div className="choose-us-card">
          <div className="icon-wrapper">
            <i className="fas fa-tags"></i>
          </div>
          <h3 className="card-title">Affordable Pricing</h3>
          <p className="card-description">
            Our services and products are priced competitively to provide the best value without compromising on quality.
          </p>
        </div>
        {/* Card 4 */}
        <div className="choose-us-card">
          <div className="icon-wrapper">
            <i className="fas fa-headset"></i>
          </div>
          <h3 className="card-title">Excellent Customer Service</h3>
          <p className="card-description">
            We are committed to providing excellent customer support and are always available to address your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeChoose;
