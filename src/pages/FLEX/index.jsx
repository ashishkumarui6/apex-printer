import React from "react";
import "./index.css";
import {
  FaPrint,
  FaPalette,
  FaBullhorn,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";

const FLEX = () => {
  const services = [
    {
      icon: <FaPrint />,
      title: "Flex Banner Printing",
      text: "High-quality flex banners for shops, businesses, events and promotions.",
    },
    {
      icon: <FaPalette />,
      title: "Creative Designing",
      text: "Eye-catching designs with vibrant colors that make your brand stand out.",
    },
    {
      icon: <FaBullhorn />,
      title: "Outdoor Advertising",
      text: "Durable outdoor prints perfect for hoardings, campaigns and advertisements.",
    },
  ];

  const features = [
    "Premium quality printing",
    "Sharp & vibrant colors",
    "Water-resistant material",
    "Fast turnaround time",
    "Affordable pricing",
    "Custom sizes available",
  ];

  return (
    <div className="flex-page">
      {/* ================= HERO ================= */}
      <section className="flex-hero">
        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>

        <div className="flex-container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">
              <FaStar /> PROFESSIONAL PRINTING SERVICES
            </span>

            <h1>
              Make Your Brand
              <span> Stand Out Big.</span>
            </h1>

            <p>
              Premium Flex Printing solutions for businesses, shops, events and
              outdoor advertising. Vibrant colors, sharp quality and fast
              delivery.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="primary-btn">
                Explore Services <FaArrowRight />
              </a>

              <a href="tel:+919999999999" className="secondary-btn">
                <FaPhoneAlt /> Call Now
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>500+</strong>
                <small>Projects</small>
              </div>

              <div>
                <strong>100%</strong>
                <small>Quality</small>
              </div>

              <div>
                <strong>24/7</strong>
                <small>Support</small>
              </div>
            </div>
          </div>

          {/* ================= PRINT CARD ================= */}
          <div className="hero-print">
            <div className="print-shadow"></div>

            <div className="print-card">
              <div className="print-top">
                <span>FLEX</span>
                <span>PRINT</span>
              </div>

              <div className="print-main">
                <small>YOUR BRAND</small>

                <h2>
                  PRINT
                  <br />
                  BIG
                </h2>

                <p>CREATE • PROMOTE • GROW</p>
              </div>

              <div className="print-bottom">
                <span>PREMIUM QUALITY</span>
                <span>24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section" id="services">
        <div className="flex-container">
          <div className="section-heading">
            <span>WHAT WE DO</span>
            <h2>Our Printing Services</h2>
            <p>
              Professional printing solutions designed to make your business
              more visible and memorable.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-number">0{index + 1}</div>

                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#contact">
                  Learn More <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="quality-section">
        <div className="flex-container quality-grid">
          <div className="quality-visual">
            <div className="quality-box">
              <span>PRINT</span>

              <strong>
                YOUR
                <br />
                VISION
              </strong>

              <small>WITH QUALITY</small>
            </div>

            <div className="floating-card">
              <FaCheckCircle />

              <div>
                <strong>Premium Quality</strong>
                <span>Every Print</span>
              </div>
            </div>
          </div>

          <div className="quality-content">
            <span className="section-label">WHY CHOOSE US</span>

            <h2>
              Printing That
              <span> Gets Attention</span>
            </h2>

            <p>
              We combine quality materials, modern printing technology and
              creative designs to deliver prints that help your business get
              noticed.
            </p>

            <div className="feature-list">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <FaCheckCircle />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="quality-btn">
              Get A Free Quote <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="flex-cta" id="contact">
        <div className="cta-decoration"></div>

        <div className="flex-container cta-content">
          <span>READY TO PRINT?</span>

          <h2>
            Let's Make Your
            <br />
            <strong>Brand Bigger.</strong>
          </h2>

          <p>Get high-quality flex printing at an affordable price.</p>

          <div className="cta-buttons">
            <a href="tel:+919999999999" className="cta-phone">
              <FaPhoneAlt /> +91 99999 99999
            </a>

            <a href="#contact" className="cta-btn">
              Get Quote <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FLEX;
