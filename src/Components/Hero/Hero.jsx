import React from 'react'
import './Hero.css';
import heroImg from '../Assets/hero-img.png';

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <p>new</p>
            <p>collections</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">Latest Collections</div>
        </div>
        <div className="hero-right">
            <img src={heroImg} alt="" />
        </div>
    </div>
  );
}

export default Hero;