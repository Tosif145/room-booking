import React from "react";
import "./css/Services.css";


import hours from './icons/hours.png';
import restaurant from './icons/restaurant.png';
import shield from './icons/shield.png';
import tutorial from './icons/tutorial.png';
import ebook from './icons/ebook.png';

import Location from "../Location";


import out from '../../assets/out.jpg';
import Footer from "../Footer";

const Services = () => {
  return (
    <div data-testid="cypress-services" className="service-content">
      <div className="service-main-div">
        <div className="service-top-div">
            <div className="service-heading">
                <h2>Services</h2>
            </div>
            <div className="service-info">
               <div className="info-title">
                <p><span>SERVICES  -------</span></p>
                <p>Strive Only For The Best.</p>
               </div>
                <div className="info-content">
                    <div className="service">
                          <div className="service-icon">
                            <img src={shield} alt="" />
                            <p>High Class Security</p>
                          </div>
                          <div className="service-icon">
                            <img src={hours} alt="" />
                            <p>24 Hours Room Service</p>
                          </div>
                          <div className="service-icon">
                            <img src={restaurant} alt="" />
                            <p>Restaurant</p>
                          </div>
                          <div className="service-icon">
                            <img src={ebook} alt="" />
                            <p>Tourist Guide Support</p>
                          </div>
                    </div>
                    <div className="service-img">
                        <img src={out} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-div">
           <div className="fill">

           </div>
        </div>
      </div>
      <Location/>
      <Footer/>
    </div>
  );
};

export default Services;


