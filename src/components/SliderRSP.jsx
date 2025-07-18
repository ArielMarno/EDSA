import "../styles/sliderrsp.css";
import { useState, useEffect } from "react";

import slider1 from "../assets/slider/slider-rsp1.webp";
import slider2 from "../assets/slider/slider-rsp2.webp";
import slider3 from "../assets/slider/slider-rsp3.webp";

const images = [slider1, slider2, slider3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="slider-layout">
      <div className="fade-slider">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className={`fade-slide ${i === currentIndex ? "visible" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;


