import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const images = [
    "/image4.jpg", // Images directly in the public folder
    "/image5.jpg",
    "/image6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="arrows">
          <span className="arrow left-arrow" onClick={goToPrevious}>
            &#10094;
          </span>
        </div>
        <img
          src={images[currentIndex]}
          alt={`slide ${currentIndex}`}
          className="slide-image"
        />
        <div className="arrows">
          <span className="arrow right-arrow" onClick={goToNext}>
            &#10095;
          </span>
        </div>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
