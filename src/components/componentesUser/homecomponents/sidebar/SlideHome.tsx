import React, { useState } from 'react'
import './slidehome.css'

import sneakers from "../../../../images/products/sneakers.png";
import air from "../../../../images/products/air.png";
import air2 from "../../../../images/products/air2.png";
import blazer from "../../../../images/products/blazer.png";
import crater from "../../../../images/products/crater.png";


export default function SlideHome() {

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleNavClick = (index: number): void => {
    setActiveSlide(index);
  };

  return (
    <div>
      <nav className='nav-product-home'>
        <div className="navTop">
          <div className="navItem">
            <img src={sneakers} alt="" />
          </div>
          <div className="navItem">
            
          </div>
          <div className="navItem">
            <span className="limitedOffer">Limited Offer!</span>
          </div>
        </div>
        <div className="navBottom">
          <h3 className="menuItem" onClick={() => handleNavClick(0)}>AIR FORCE</h3>
          <h3 className="menuItem" onClick={() => handleNavClick(1)}>JORDAN</h3>
          <h3 className="menuItem" onClick={() => handleNavClick(2)}>BLAZER</h3>
          <h3 className="menuItem" onClick={() => handleNavClick(3)}>CRATER</h3>
        </div>
      </nav>


      <div className="slider-product-home">
        <div className="sliderWrapper">
          {activeSlide === 0 && (
            <div className="sliderItem">
              <img src={air} alt="" className="sliderImg" />
              <div className="sliderBg"></div>
              <h1 className="sliderTitle">AIR FORCE <br /> NEW <br /> SEASON</h1>
              <h2 className="sliderPrice">$119</h2>
              <a href="#product">
                <span className="buyButton">BUY NOW!</span>
              </a>
            </div>
          )}
          {activeSlide === 1 && (
            <div className="sliderItem">
              <img src={air2} alt="" className="sliderImg" />
              <div className="sliderBg"></div>
              <h1 className="sliderTitle">AIR JORDAN <br /> NEW <br /> SEASON</h1>
              <h2 className="sliderPrice">$149</h2>
              <a href="#product">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
          )}
          {activeSlide === 2 && (
            <div className="sliderItem">
              <img src={blazer} alt="" className="sliderImg" />
              <div className="sliderBg"></div>
              <h1 className="sliderTitle">BLAZER<br />NEW <br /> SEASON</h1>
              <h2 className="sliderPrice">$149</h2>
              <a href="#product">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
          )}
          {activeSlide === 3 && (
            <div className="sliderItem">
              <img src={crater} alt="" className="sliderImg" />
              <div className="sliderBg"></div>
              <h1 className="sliderTitle">CRATER<br />NEW <br /> SEASON</h1>
              <h2 className="sliderPrice">$149</h2>
              <a href="#product">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
          )}
        </div >
      </div >
    </div>
  );
}