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
    <section id="contact" className="section1">
    <div className="container1">
        <div className="contactInfo1"> 
            <div>
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span><img src={direction}/></span>
                        <span>Beside Barshal Water Tank,<br/>
                          Manpur, Barhanti,<br/>
                          West Bengal 723156</span>
                        
                    </li>
                    <li>
                        <span><img src={email}/></span>
                        <span><a href="mailto: kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></span>
                    </li>
                    <li>
                        <span><img src={call}/></span>
                        <span><a href="tel:+919007062180"> +91 9007062180 </a></span>
                    </li>

                </ul>
            </div>
            <ul className="sci">
                <li><a href="#"><img src={facebook}/></a></li>
                <li><a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank"><img src={instagram}/></a></li>
                <li><a href="#"><img src={twitter}/></a></li>
                <li><a href="#"><img src={linkedin}/></a></li>
                
            </ul>
        </div>
            <div className="contactForm1">
                <h2>Send a Message</h2>
                <div className="formBox1">
                <div className="inputBox1 w50">
                    <input type="text" name="" required=""/>
                    <span>First Name</span>
                </div>
                <div className="inputBox1 w50">
                    <input type="text" required=""/>
                    <span>Last Name</span>
                </div>
                <div className="inputBox1 w50">
                    <input type="email" required=""/>
                    <span>Email Address</span>
                </div>
                <div className="inputBox1 w50">
                    <input type="text" required=""/>
                    <span>Mobile Number</span>
                </div>
                <div className="inputBox1 w100">
                    <textarea required=""></textarea>
                    <span>Write your message here...</span>
                </div>
                <div className="inputBox1 w100">
                    <input type="submit" value="Send"/>
                </div>
            </div>
        </div> 
</div></section>
  );
};

export default Contact;
