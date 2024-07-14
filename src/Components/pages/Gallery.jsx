import React, { useState, useEffect } from "react";
import "./css/Gallery.css";

import Item from "./Item";
import Location from "../Location";
import Footer from "../Footer";



import photo_collections from "./data/photos";


const Gallery = () => {

 

  return (
    <div data-testid="cypress-gallery" className="gallery-content">
      <div className="gallery-main-div">
        <div className="gallery-top-div">
          <div className="gallery-heading">
            <p>Gallery</p>
          </div>
          <div className="gallery-info">
            <div data-testid="cypress-collections" className="new-collections" id="new-cln">
              <div className="collections">
                {photo_collections.map((item,i) => {
                  return <Item key={i} id={item.id} image={item.image} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-bottom-div">
          <div className="gallery-fill"></div>
        </div>
      </div>
      <Location />
      <Footer />
    </div>
  );
};

export default Gallery;
