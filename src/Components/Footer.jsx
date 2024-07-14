import React from 'react'
import './css/Footer.css'


import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div data-testid="cypress-footer" className="footer">
    <div className="footer-inner">
      <div className="footer-item">
        <h3>Kingsukh guest house</h3>
        <p>
          Discover a world of comfort, luxury, and adventure as you explore
          our curated selection of hotels, making every moment of your
          getaway truly extraordinary.
        </p>
        <a href="https://wa.link/at5ion">
        <button className="book">Book now</button>
        </a>
  
      </div>

      <div className="footer-item">
        <h3>Quick Links</h3>
        <p>Browse Destinations</p>
        <p>Special Offers & Packages</p>
        <p>Room Types & Amenities</p>
        <p>Customer Reviews & Ratings</p>
        <p>Travel Tips & Guides</p>
      </div>
      <div className="footer-item">
        <h3>OUR SERVICES</h3>
        <p>Concierge Assistance</p>
        <p>Flexible Booking Options</p>
        <p>Airport Transfers</p>
        <p>Wellness & Recreation</p>
      </div>

      <div className="footer-item">
        <h3>CONTACT US</h3>
        <p>
          Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
          723156
        </p>
        <p>kkghosh0099@gmail.com</p>
        <p>+91 9007062180</p>
        <div className="icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer
