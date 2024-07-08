import React, { useState, useEffect } from "react";
import "./css/Gallery.css";

import Item from "./Item";
import Location from "../Location";
import Footer from "../Footer";



import photo_collections from "./data/photos";


const Gallery = () => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:4000/newcollection`)
    fetch(`https://shop-dep.vercel.app/newcollection`)
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);

  // console.log('new collection ', new_collection);

  return (
    <div className="gallery-content">
      <div className="gallery-main-div">
        <div className="gallery-top-div">
          <div className="heading">
            <p>Gallery</p>
          </div>
          <div className="gallery-info">
            <div className="new-collections" id="new-cln">
              <div className="collections">
                {photo_collections.map((item, i) => {
                  return <Item key={i} image={item.image} />;
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
