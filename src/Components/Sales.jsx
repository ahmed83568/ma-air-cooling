import React, { useEffect } from 'react';
import './Sales.css';
import ac from "../Images/ac sevice.jpg";
import spare from "../Images/spare.jpg";
import lifespan from "../Images/cooling.png";
import installation from "../Images/installation.jpg";
import maintainance from "../Images/maintainance.jpg";
import consultant from "../Images/consultant.png";
import { gsap } from 'gsap/gsap-core';


const Sales = () => {

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    if (mq.matches) {
      gsap.fromTo(
        ".sales-card",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, delay:4.2,duration: 1, stagger: 0.3, ease: "power2.out" }
      );
    }
    gsap.fromTo(
      ".sales-card",
      { x: -200, opacity: 0 ,scale:.3},
      { x: 0, opacity: 1, delay:3.2,duration: 1, stagger: 0.2, ease: "power2.out",scale:1, }
    )
    
  }, []);
  const products = [
    {
      img: ac,
      title: 'Air Condition',
      desc: 'High-quality air condition with advanced cooling technology for your comfort.',
    },
    {
      img: spare,
      title: 'Spare Parts',
      desc: 'Reliable and genuine spare parts for maintaining your air cooling systems.',
    },
    {
      img: lifespan,
      title: 'Cooling Accessories',
      desc: 'Accessories to enhance the performance and lifespan of your air coolers.',
    },
  ];

  const services = [
    {
      img: installation,
      title: 'Installation Service',
      desc: 'Professional installation services to set up your cooling system efficiently.',
    },
    {
      img: maintainance,
      title: 'Maintenance and Repair',
      desc: 'Regular maintenance and repair services to keep your equipment running smoothly.',
    },
    {
      img: consultant,
      title: 'Consultation',
      desc: 'Expert consultation to help you choose the best cooling solutions for your needs.',
    },
  ];

  const renderCards = (items) =>
    items.map(({ img, title, desc }, index) => (
      <div
        className="sales-card"
        key={index}
      >
        <img src={img} alt={title} className="sales-card-image" style={{objectPosition:index===1?'center':'top'}} />
        <h4 className="sales-card-title">{title}</h4>
        <p className="sales-card-desc">{desc}</p>
      </div>
    ));

  return (
    <section className="service-container">
      <h2 className="sales-heading">Sales and Services</h2>

      <div className="sales-block">
        <h3 className="sales-subheading">Products We Sell</h3>
        <div className="sales-cards-container">{renderCards(products)}</div>
      </div>

      <div className="sales-block">
        <h3 className="sales-subheading">Services We Provide</h3>
        <div className="sales-cards-container">{renderCards(services)}</div>
      </div>
    </section>
  );
};

export default Sales;
