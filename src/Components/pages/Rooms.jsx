import React from "react";
import "./css/Rooms.css";


import small from '../../assets/small.jpg';
import large from '../../assets/large.jpg';

import heart from './icons/heart.png'
import fillColor from './icons/fillColor.png'
import shieldStar from './icons/shieldStar.png'

import Location from '../Location';
import Footer from "../Footer";


const Rooms = () => {
  return (
    <div id="room" className="rooms-content">
      <div className="rooms-main-div">
        <div className="rooms-top-div">
        <div className="room-heading">
                <h2>Rooms</h2>
            </div>
          <div className="room-grid">
            <div className="room-card" data-sr-id="10">
              <div className="room-card-image">
                <img onClick={window.scrollTo(0,0)} className="room-img" src={small} alt="room" />
                <div className="room-card-icons">
                  <span>
                    <img src={heart} alt="" />
                  </span>
                  <span>
                  <img src={fillColor} alt="" />
                  </span>
                  <span>
                  <img src={shieldStar} alt="" />
                  </span>
                </div>
              </div>
              <div className="room-card-details">
                <h4>Cozy Haven Room</h4>
                <p>
                  Escape to comfort in our Cozy Haven Room, a snug retreat
                  designed for intimate relaxation.
                </p>
                <h5>
                  Starting from <span>Rs. 1000/night</span>
                </h5>
                <a href="https://wa.link/at5ion">
                  <button className="btn">BOOK NOW</button>
                </a>
              </div>
            </div>
            <div className="room-card" data-sr-id="11">
              <div className="room-card-image">
                <img onClick={window.scrollTo(0,0)} className="room-img" src={large} alt="room" />
                <div className="room-card-icons">
                <span>
                    <img src={heart} alt="" />
                  </span>
                  <span>
                  <img src={fillColor} alt="" />
                  </span>
                  <span>
                  <img src={shieldStar} alt="" />
                  </span>
                </div>
              </div>
              <div className="room-card-details">
                <h4>Spacious Serenity Suite</h4>
                <p>
                  Indulge in luxury and ample space in our Spacious Serenity
                  Suite, where tranquility meets roomy elegance.
                </p>
                <h5>
                  Starting from <span>Rs. 1500/night</span>
                </h5>
                <a href="https://wa.link/at5ion">
                  <button className="btn">BOOK NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-div">
          <div className="fill"></div>
        </div>
      </div>
      <Location/>
      <Footer/>
    </div>
  );
};

export default Rooms;
