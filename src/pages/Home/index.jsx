import React from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight, FaPrint, FaStar, FaCheckCircle } from "react-icons/fa";
import "./home.css";
import Price from "../../components/Price/Price";
import Choose from "../../components/Choose/Choose";
import Servicecard from "../../components/Servicecard/Servicecard";

const Home = () => {
  const slides = [
    {
      id: 1,
      tag: "FLEX PRINTING PRESS",
      title: "Premium Flex Printing",
      highlight: "That Makes Your Brand Stand Out",
      description:
        "High-quality flex printing for banners, hoardings, events, shops and outdoor advertising.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      tag: "CREATIVE BRANDING",
      title: "Powerful Branding",
      highlight: "For Your Growing Business",
      description:
        "Create a strong brand identity with creative banners, posters, signage and promotional materials.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      tag: "OUTDOOR ADVERTISING",
      title: "Big Prints",
      highlight: "Big Business Impact",
      description:
        "Make your business visible with durable hoardings, flex boards and large-format outdoor printing.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      tag: "FAST & RELIABLE",
      title: "Print. Promote.",
      highlight: "Grow Your Business.",
      description:
        "Professional printing solutions with sharp colors, premium materials and fast delivery.",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <main>
      <section className="printing-hero">
        <MultiCarousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          showDots
          arrows
          swipeable
          draggable
          pauseOnHover
          keyBoardControl
        >
          {slides.map((slide) => (
            <div className="hero-slide" key={slide.id}>
              <div className="hero-overlay"></div>

              <img src={slide.image} alt={slide.title} className="hero-image" />

              <div className="hero-content-wrapper">
                <div className="hero-content">
                  <div className="hero-badge">
                    <FaStar />
                    <span>{slide.tag}</span>
                  </div>

                  <h1>
                    {slide.title}
                    <br />
                    <span>{slide.highlight}</span>
                  </h1>

                  <p>{slide.description}</p>

                  <div className="hero-features">
                    <div>
                      <FaCheckCircle />
                      Premium Quality
                    </div>

                    <div>
                      <FaCheckCircle />
                      Fast Delivery
                    </div>

                    <div>
                      <FaCheckCircle />
                      Affordable Price
                    </div>
                  </div>

                  <div className="hero-buttons">
                    <button className="primary-btn">
                      Get a Quote
                      <FaArrowRight />
                    </button>

                    <button className="secondary-btn">
                      <FaPrint />
                      Our Services
                    </button>
                  </div>
                </div>
              </div>

              <div className="slide-number">0{slide.id}</div>
            </div>
          ))}
        </MultiCarousel>
      </section>

      <Servicecard />

      <Price />

      <Choose />
    </main>
  );
};

export default Home;
