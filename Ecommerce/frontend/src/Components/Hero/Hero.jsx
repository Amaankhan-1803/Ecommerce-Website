import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'
import slider1 from '../Assets/slider1.png'
import slider2 from '../Assets/slider2.png'
import slider3 from '../Assets/slider3.png'
import slider4 from '../Assets/slider4.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
   <div className="banners">
     <Carousel interval={3000}>
      <Carousel.Item>
        <Link to='/shop'>
        <img
          className="d-block img-fluid" src={slider1}  alt="First slide"/>
        <Carousel.Caption>
          <p>Style Redefined: Elevate Your Wardrobe</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to = '/shop'>
        <img className="d-block img-fluid"src={slider2} alt="Second slide" />
        <Carousel.Caption>
          <p>Transform Your Home with Elegant Decor</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      
      <Carousel.Item>
        <Link to='/shop'>
        <img className="d-block img-fluid" src={slider3} alt="Third slide"/>
        <Carousel.Caption>
          <p>Enhance Your Cooking Space with Style</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
     
     <Carousel.Item>
        <Link to = '/shop'>
            <img className="d-block img-fluid" src={slider4} alt="Third slide"/>
            <Carousel.Caption>
            <p>Gear Up for Your Winning Game</p>
            </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
   </div>
  );
};

export default Banner;
