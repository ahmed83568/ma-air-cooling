// src/Components/HomeCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css'; 
import serimg from "../Images/technician-repairing-air-conditioner-with-electrician-fixing-air-conditioner.jpg"
import washing from "../Images/washing.png"
import fridge from "../Images/refigrator.jpg"
import ac from "../Images/ac sevice.jpg"
import carousel from "../Images/carousel.jpg"
import caro from "../Images/caro.jpg"
import caro1 from "../Images/caro1.jpg"
import caro2 from "../Images/caro2.jpg"

const HomeCarousel = () => {
  return (
    <Carousel className="home-carousel" style={{marginTop:'3vh'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ac}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>First Slide</h3>
          <p>Description of the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>First Slide</h3>
          <p>Description of the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Second Slide</h3>
          <p>Description of the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro1}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Third Slide</h3>
          <p>Description of the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro2}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Third Slide</h3>
          <p>Description of the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
