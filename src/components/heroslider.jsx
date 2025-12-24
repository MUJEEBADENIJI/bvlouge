import { useEffect, useState } from "react";

import "./heroslider.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

function HeroSlider() {
  const slides = [
    {
      image: slide1,
      title: "new arrivals",
      subtitle: "fresh fits just dropped"
    },
    {
      image: slide2,
      title: "season sale",
      subtitle: "up to 50% off"
    },
    {
      image: slide3,
      title: "announcement",
      subtitle: "important updates show here"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <button className="slider-btn prev" onClick={prevSlide}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <button className="slider-btn next" onClick={nextSlide}>
        <i className="bi bi-chevron-right"></i>
      </button>
    </section>
  );
}

export default HeroSlider;
