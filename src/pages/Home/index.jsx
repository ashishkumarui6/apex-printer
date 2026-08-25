import React from "react";
import MultiCarousel from "../../shared/Carousel";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import slide_1 from "../../assets/slide_1.jpg";
import "./home.css";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <MultiCarousel
        arrows={true}
        infinite={true}
        showDots={true}
        autoPlay={true}
        responsive={responsive}
        customLeftArrow={
          <button
            style={{
              position: "absolute",
              left: 15,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent", // changed here
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              zIndex: 2,
              cursor: "pointer",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <MdOutlineArrowBackIos size={30} />
          </button>
        }
        customRightArrow={
          <button
            style={{
              position: "absolute",
              right: 15,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent", // changed here
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            <MdOutlineArrowForwardIos size={30} />
          </button>
        }
      >
        <div style={{ width: "100%", height: "400px", background: "red" }}>
          <img
            src={slide_1}
            alt="slide_1"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "100%", height: "400px", background: "blue" }}>
          <img
            src={slide_1}
            alt="slide_1"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "100%", height: "400px", background: "green" }}>
          <img
            src={slide_1}
            alt="slide_1"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ width: "100%", height: "400px", background: "yellow" }}>
          <img
            src={slide_1}
            alt="slide_1"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </MultiCarousel>
      <section>
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>

          <div className="container hero-wrapper">
            <div className="hero-content">
              <div className="hero-badge">
                <i className="fa-solid fa-star"></i>
                Professional Printing Solutions
              </div>

              <h1>
                Your Brand, <span>Printed Bigger.</span>
              </h1>

              <p>
                High-quality flex printing, banners, hoardings and signage
                solutions that make your brand impossible to ignore.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="primary-btn">
                  Get Free Quote
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <a href="#services" className="secondary-btn">
                  Explore Services
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <strong>10+</strong>
                  <span>Years Experience</span>
                </div>

                <div className="stat-item">
                  <strong>5K+</strong>
                  <span>Projects Done</span>
                </div>

                <div className="stat-item">
                  <strong>99%</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-card">
                <div className="print-machine">
                  <i className="fa-solid fa-print"></i>
                </div>

                <div className="floating-card card-one">
                  <i className="fa-solid fa-check"></i>

                  <div>
                    <strong>Premium Quality</strong>
                    <small>Sharp & Vibrant Prints</small>
                  </div>
                </div>

                <div className="floating-card card-two">
                  <i className="fa-solid fa-bolt"></i>

                  <div>
                    <strong>Fast Delivery</strong>
                    <small>On-Time Service</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="services section-padding" id="services">
          <div className="container">
            <div className="section-heading">
              <span>WHAT WE PRINT</span>
              <h2>Our Printing Services</h2>
              <p>
                Complete printing solutions for businesses, events, advertising
                and branding.
              </p>
            </div>

            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fa-solid fa-image"></i>
                </div>

                <h3>Flex Printing</h3>

                <p>
                  High-resolution flex printing for indoor and outdoor
                  advertising campaigns.
                </p>

                <a href="#contact">
                  Learn More
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fa-solid fa-sign-hanging"></i>
                </div>

                <h3>Banner Printing</h3>

                <p>
                  Attractive promotional banners for shops, events, exhibitions
                  and campaigns.
                </p>

                <a href="#contact">
                  Learn More
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fa-solid fa-building"></i>
                </div>

                <h3>Hoarding Printing</h3>

                <p>
                  Large-format hoarding printing with vibrant colors and
                  long-lasting quality.
                </p>

                <a href="#contact">
                  Learn More
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fa-solid fa-store"></i>
                </div>

                <h3>Shop Branding</h3>

                <p>
                  Complete shop branding solutions including boards, vinyl and
                  promotional graphics.
                </p>

                <a href="#contact">
                  Learn More
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="about section-padding" id="about">
          <div className="container about-wrapper">
            <div className="about-image">
              <div className="about-main-card">
                <i className="fa-solid fa-print"></i>

                <h3>Professional Printing</h3>

                <p>Quality • Creativity • Reliability</p>
              </div>

              <div className="experience-card">
                <strong>10+</strong>

                <span>
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>

            <div className="about-content">
              <span className="section-label">ABOUT APEX PRINTER</span>

              <h2>
                We Turn Your Ideas Into <span>Powerful Prints.</span>
              </h2>

              <p>
                Apex Printer is a professional flex printing press providing
                high-quality printing and branding solutions for businesses,
                organizations and individuals.
              </p>

              <p>
                From small promotional banners to large outdoor hoardings, our
                team focuses on quality, attractive designs and fast turnaround
                time.
              </p>

              <div className="about-list">
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  Premium Printing Quality
                </div>

                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  Affordable Pricing
                </div>

                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  Fast & Reliable Delivery
                </div>

                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  Professional Design Support
                </div>
              </div>

              <a href="#contact" className="primary-btn">
                Know More
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section className="portfolio section-padding" id="portfolio">
          <div className="container">
            <div className="section-heading">
              <span>OUR WORK</span>

              <h2>Creative Printing Projects</h2>

              <p>Some of our latest printing and branding projects.</p>
            </div>

            <div className="portfolio-grid">
              <div className="portfolio-card">
                <div className="portfolio-icon">
                  <i className="fa-solid fa-shop"></i>
                </div>

                <h3>Shop Branding</h3>

                <p>Complete outdoor branding solution</p>
              </div>

              <div className="portfolio-card">
                <div className="portfolio-icon">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>

                <h3>Advertising Banner</h3>

                <p>High-impact promotional banners</p>
              </div>

              <div className="portfolio-card">
                <div className="portfolio-icon">
                  <i className="fa-solid fa-building"></i>
                </div>

                <h3>Outdoor Hoarding</h3>

                <p>Large-format outdoor advertising</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta" id="contact">
          <div className="container cta-wrapper">
            <div>
              <span>READY TO PRINT?</span>

              <h2>
                Let's Make Your Brand <strong>Stand Out!</strong>
              </h2>

              <p>
                Contact us today and get a free quotation for your printing
                project.
              </p>
            </div>

            <a href="tel:+919999999999" className="cta-btn">
              <i className="fa-solid fa-phone"></i>
              Call Now
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
