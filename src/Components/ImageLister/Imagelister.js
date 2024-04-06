import React, { useState, useEffect, useMemo } from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

import "./ImageLister.css";

const Imagelister = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://rishirajansgallery.onrender.com/images"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const memoizedImagelister = useMemo(
    () => (
      <div className="Container">
        <div className="galleryContainer">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[
              lgThumbnail,
              lgZoom,
              lgAutoplay,
              lgFullscreen,
              lgRotate,
              lgShare,
            ]}>
            {images.map((image, index) => (
              <a href={image.Url} key={index} data-download-url={image.hdUrl}>
                <img alt={image.id} src={image.Url} />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    ),
    [images]
  ); // Include images in the dependencies array

  return memoizedImagelister;
};

export default Imagelister;
