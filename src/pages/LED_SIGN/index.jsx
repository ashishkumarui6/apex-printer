import React from "react";
import {
  FaLightbulb,
  FaBolt,
  FaTools,
  FaPalette,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import "./index.css";

const LED_SIGN = () => {
  const services = [
    {
      icon: <FaLightbulb />,
      title: "LED Sign Boards",
      description:
        "Bright and attractive LED sign boards designed to make your business visible day and night.",
    },
    {
      icon: <FaPalette />,
      title: "Custom Designs",
      description:
        "Creative designs, colors, fonts and branding tailored to match your business identity.",
    },
    {
      icon: <FaBolt />,
      title: "Energy Efficient",
      description:
        "High-quality LED lighting with excellent brightness and efficient power consumption.",
    },
    {
      icon: <FaTools />,
      title: "Installation",
      description:
        "Professional installation with strong finishing and secure mounting for long-lasting use.",
    },
  ];

  const benefits = [
    "High brightness and clear visibility",
    "Custom size, shape and design",
    "Weather-resistant materials",
    "Energy-efficient LED technology",
    "Long-lasting performance",
    "Professional installation",
  ];

  return (
    <div className="led-page">
      {/* ================= HERO ================= */}
      <section className="led-hero">
        <div className="led-glow glow-one"></div>
        <div className="led-glow glow-two"></div>

        <div className="led-container led-hero-content">
          <div className="led-hero-text">
            <span className="led-badge">
              <FaLightbulb /> LED SIGN BOARD PRINTING
            </span>

            <h1>
              Make Your Brand
              <span> Shine Bright</span>
            </h1>

            <p>
              Premium LED sign boards that grab attention, strengthen your brand
              presence and keep your business visible day and night.
            </p>

            <div className="led-hero-buttons">
              <a href="#quote" className="led-btn primary">
                Get Free Quote <FaArrowRight />
              </a>

              <a href="tel:+919140704566" className="led-btn secondary">
                <FaPhoneAlt /> Call Now
              </a>
            </div>

            <div className="led-rating">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>Premium Quality Signage</span>
            </div>
          </div>

          {/* LED BOARD MOCKUP */}
          <div className="led-board-wrapper">
            <div className="led-board">
              <div className="led-board-border">
                <div className="led-dot dot-1"></div>
                <div className="led-dot dot-2"></div>
                <div className="led-dot dot-3"></div>
                <div className="led-dot dot-4"></div>

                <div className="led-board-content">
                  <small>WELCOME TO</small>
                  <h2>YOUR BRAND</h2>
                  <p>PRINT • DESIGN • CREATE</p>
                </div>
              </div>
            </div>

            <div className="led-light-effect"></div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="led-services">
        <div className="led-container">
          <div className="led-section-heading">
            <span>WHAT WE OFFER</span>
            <h2>
              Professional <strong>LED Signage</strong>
            </h2>
            <p>
              Complete LED signage solutions designed to give your business a
              powerful and professional appearance.
            </p>
          </div>

          <div className="led-service-grid">
            {services.map((service, index) => (
              <div className="led-service-card" key={index}>
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="led-about">
        <div className="led-container led-about-grid">
          <div className="led-about-visual">
            <div className="about-board">
              <div className="about-board-inner">
                <span>YOUR</span>
                <strong>BRAND</strong>
                <small>SHINE BRIGHT</small>
              </div>
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

          <div className="led-about-content">
            <span className="led-small-title">
              <FaLightbulb /> WHY LED SIGN BOARDS?
            </span>

            <h2>
              Get Noticed With
              <span> Powerful Lighting</span>
            </h2>

            <p>
              Your storefront is often the first impression customers have of
              your business. Our LED sign boards combine creative design,
              premium materials and bright illumination to make your brand stand
              out.
            </p>

            <div className="benefit-list">
              {benefits.map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <FaCheckCircle />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#quote" className="led-outline-btn">
              Start Your Project <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="led-process">
        <div className="led-container">
          <div className="led-section-heading">
            <span>OUR PROCESS</span>
            <h2>
              From Idea To <strong>Bright Sign</strong>
            </h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Design</h3>
              <p>
                We create a professional LED sign design based on your brand.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">02</div>
              <h3>Production</h3>
              <p>Your sign is manufactured using quality materials and LEDs.</p>
            </div>

            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Installation</h3>
              <p>
                Our team installs your sign securely at your business location.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">04</div>
              <h3>Shine</h3>
              <p>
                Your business gets a bright, attractive and professional look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="led-cta" id="quote">
        <div className="led-cta-glow"></div>

        <div className="led-container">
          <div className="led-cta-content">
            <span>
              <FaLightbulb /> READY TO SHINE?
            </span>

            <h2>
              Let's Create A Sign
              <strong> That Gets Noticed!</strong>
            </h2>

            <p>
              Contact us today for custom LED sign board design, printing and
              installation.
            </p>

            <div className="cta-buttons">
              <a href="tel:+919999999999" className="led-btn primary">
                <FaPhoneAlt /> Call Us Today
              </a>

              <a href="#contact" className="led-btn white">
                Request A Quote <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LED_SIGN;
