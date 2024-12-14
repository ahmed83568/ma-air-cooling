// src/Components/HomeCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css'; 
import ac from "../Images/ac sevice.jpg";
import acserv from "../Images/servicing.jpeg";
import caro from "../Images/caro.jpg";
import caro1 from "../Images/caro1.jpg";
import caro2 from "../Images/caro2.jpg";
import video from "../Images/video.mp4"
import checking from "../Images/checking-conditioner.jpg"
import solution from "../Images/solution.jpg"

const HomeCarousel = () => {
  return (
    <Carousel className="home-carousel" style={{ marginTop: '3vh' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={checking}
          alt="AC Installation"
          style={{objectPosition:'top'}}
        />
        <Carousel.Caption className="carousel-caption">
          <h3>AC Installation</h3>
          <p>Professional air conditioner installation for your home or office, ensuring optimal performance and efficiency.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={acserv}
          alt="AC Service"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>AC Service</h3>
          <p>Expert AC servicing to keep your cooling system running smoothly throughout the year.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={solution}
          alt="AC Solutions"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>AC Solutions</h3>
          <p>Comprehensive solutions for all your AC issues, including repairs, maintenance, and troubleshooting.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro1}
          alt="Spare Parts"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Spare Parts</h3>
          <p>High-quality spare parts for your air conditioner to ensure long-lasting performance.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro2}
          alt="Accessories for AC and Refrigerator"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Accessories for AC and Refrigerator</h3>
          <p>Wide range of accessories for your air conditioner and refrigerator to enhance functionality and convenience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
