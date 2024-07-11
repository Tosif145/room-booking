import React, { useRef, useState } from "react";
import "./css/NavBar.css";
import nav_dropdown from "../assets/nav_dropdown.png";
import titleImg from "../assets/titleImg.webp";

const NavBar = ({ setSelectedComponent,selectedComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('home');
  const menuRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleHome = (component) => {
    setActiveOption(component);
    setSelectedComponent(component);
  }

  const handleClick = (component) => {
    setIsOpen(!isOpen);
    setActiveOption(component);
    setSelectedComponent(component);
  };



  return (
    <div className={`${selectedComponent === 'home'  ? 'nav': 'nav-change'}`}>
      <div className="nav-inner">
        <div
          onClick={() => handleHome('home')}
          className={`option-home ${activeOption === 'home' ? 'active' : ''}`}
        >
          <img src={titleImg} alt="Title" />
          <p>Kingsukh</p>
        </div>
        <div className="navbar">
          <a href="#content">
            <div
             onClick={() => handleClick('home')}
             className={`option ${activeOption !== 'home' ? '' : ''}`}
            >
              <p>About</p>
              <hr />
            </div>
          </a>
          <div
            onClick={() => handleClick('gallery')}
            className={`option ${activeOption === 'gallery' ? 'active' : ''}`}
          >
            <p>Gallery</p>
            <hr />
          </div>
          <div
            onClick={() => handleClick('services')}
            className={`option ${activeOption === 'services' ? 'active' : ''}`}
          >
            <p>Services</p>
            <hr />
          </div>
          <div
            onClick={() => handleClick('rooms')}
            className={`option ${activeOption === 'rooms' ? 'active' : ''}`}
          >
            <p>Rooms</p>
            <hr />
          </div>
          <div
            onClick={() => handleClick('contact')}
            className={`option ${activeOption === 'contact' ? 'active' : ''}`}
          >
            <p>Contact</p>
            <hr />
          </div>
          <a href="#map-container">
            <div
            //  onClick={() => handleClick('home')}
             className={`option ${activeOption === '' ? 'active' : ''}`}
            >
              <p>Location</p>
              <hr />
            </div>
          </a>
          <a href="https://wa.link/at5ion"><div onClick={() => handleClick('book')} className="book">Book Now</div></a>
          
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            onClick={toggleDropdown}
            aria-expanded={isOpen ? "true" : "false"}
          >
            MENU
          </button>
          <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
          <li  onClick={() => handleClick('home')} className={`item-hover dropdown-item ${activeOption !== 'home' ? 'about-change' : ''}`}>
              <a className="about" href="#content">
                About Us
              </a>
            </li>
            <li className='item-hover' 
             onClick={() => handleClick('book')}
             
          >
              <a className="dropdown-item" href="https://wa.link/at5ion">
                Book a room
              </a>
            </li>
            <li className='item-hover' 
             onClick={() => handleClick('gallery')}
          
          >
              <a className="dropdown-item" href="#">
                Gallery
              </a>
            </li>
            <li className='item-hover' 
             onClick={() => handleClick('services')}
          
          >
              <a className="dropdown-item" href="#">
                Services
              </a>
            </li>
            <li className='item-hover' 
             onClick={() => handleClick('rooms')}
          
          >
              <a className="dropdown-item" href="#">
                Rooms
              </a>
            </li>
            <li className='item-hover' 
             onClick={() => handleClick('contact')}
          
          >
              <a className="dropdown-item" href="#">
                Contact
              </a>
            </li>
            <li    className="dropdown-item item-hover">
              <a className="about" href="#map-container">
               Location
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
