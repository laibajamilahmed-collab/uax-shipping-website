import { useEffect, useState } from "react";
import "./HeroSection.css";

function HeroSlider() {
  const slides = [
    {
      image: "/assets/images/Herosectionpic1.jpg",
      subtitle: "WE ARE PROUD",
      title: "TO BE ALWAYS ON DEMAND",
      text: "Professional freight services with secure handling."
    },
    {
      image: "/assets/images/Herosectionpic2.jpg",
      subtitle: "FAST DELIVERY",
      title: "WORLDWIDE SHIPPING SERVICES",
      text: "Reliable logistics and transportation solutions worldwide."
    },
    {
      image: "/assets/images/Herosectionpic3.jpg",
      subtitle: "SAFE TRANSPORT",
      title: "YOUR CARGO OUR RESPONSIBILITY",
      text: "Professional freight services with secure handling."
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-slider"
      style={{
        backgroundImage: `url(${slides[current].image})`
      }}
    >
      <div className="overlay"></div>

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="slider-content">
        <h5>{slides[current].subtitle}</h5>

        <h1>{slides[current].title}</h1>

        <p>{slides[current].text}</p>

        <button className="hero-btn">
          CONTACT WITH US
        </button>
      </div>
    </section>
  );
}

export default HeroSlider;