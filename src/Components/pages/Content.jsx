import React from "react";
import "./css/Content.css";

import galleryCard from '../../assets/gallery-card.png';
import roomsCard from '../../assets/rooms-card.png';
import location from '../../assets/location-card.png';

import Location from "../Location";
import Footer from "../Footer";
import Contact from "./Contact";

const Content = ({ setSelectedComponent }) => {

  const handleClick = (component) => {;
    setSelectedComponent(component);
  };

  return (
    <div data-testid="cypress-content" id="content" className="content">
      <div className="search">
        <h5 className="slide-in">Simple - Unique - Friendly</h5>
        <p className="slide-in" style={{ animationDelay: "0.5s" }}>
          Make Yourself At Home
        </p>
        <p className="slide-in" style={{ animationDelay: "1s" }}>
          In Our <span>Guest House</span>.
        </p>
      </div>

      <div className="cards-container">
        <div className="intro">
          <h3>The Best Holidays Start Here!</h3>
          <hr />
          <p>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <h3>Gallery</h3>
            <img src={galleryCard} alt="" />
            <hr />
            <button onClick={() => handleClick('gallery')}   className="read">View</button>
          </div>
          <div className="card">
            <h3>Rooms</h3>
            <img src={roomsCard} alt="" />
            <hr />
            <a href="#room"><button onClick={() => handleClick('rooms')} className="read">View</button></a>
          </div>
          <div className="card">
            <h3>Location</h3>
            <img src={location} alt="" />
            <hr />
            <a href="#map-container">
            <button className="read">View</button>
            </a>
            
          </div>
        </div>
      </div>
      <Contact/>
      <Location/>
      <Footer/>
    </div>
  );
};

export default Content;
