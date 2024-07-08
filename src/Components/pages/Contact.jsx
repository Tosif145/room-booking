import React from "react";
import "./css/Contact.css";

import call from "./icons/call.png";
import email from "./icons/email.png";
import direction from "./icons/direction.png";

import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import twitter from "./icons/twitter.png";
import linkedin from "./icons/linkedin.png";

import Location from "../Location";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className="contact-content">
      <div className="contact-main-div">
        <div className="contact-top-div">
          <div className="heading">
            <p>Contacts</p>
          </div>
          <div className="contact-info">

              <div className="forms-container">
                <div className="form-control signin-form">
                  <form action="#">
                    <h2>Send a message</h2>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="number" placeholder="Phone number" />
                    <button>Send</button>
                  </form>
                </div>
              </div>
              <div className="intros-container">
                <div className="intro-control signup-intro">
                  <div className="contact-left">
                    <h2>Contact Info</h2>
                    <ul>
                      <li>
                        <span>
                          <img src={direction} alt="" />
                        </span>
                        <span>
                          Beside Barshal Water Tank, Manpur,<br /> Barhanti West
                          Bengal 723156
                        </span>
                      </li>

                      <li>
                        <span>
                          <img src={email} alt="" /> 
                        </span>
                        <span>
                          <a href="mailto: kkghosh0099@gmail.com">
                            kkghosh0099@gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <img src={call} alt="" /> 
                        </span>
                        <span>
                          <a href="tel:+919007062180"> +91 9007062180 </a>
                        </span>
                      </li>
                    </ul>

                    <div className="social-icons">
                      <img src={facebook} alt="" />
                      <img src={instagram} alt="" />
                      <img src={twitter} alt="" />
                      <img src={linkedin} alt="" />
                    </div>
                  </div>
                </div>
              </div>
  
          </div>
        </div>
        <div className="contact-bottom-div">
          <div className="contact-fill"></div>
        </div>
      </div>
      <Location />
      <Footer />
    </div>
  );
};

export default Contact;
