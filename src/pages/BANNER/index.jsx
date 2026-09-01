import React from "react";
import {
  FaPrint,
  FaBullhorn,
  FaPalette,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import "./index.css";

const BANNER = () => {
  const bannerTypes = [
    {
      icon: <FaBullhorn />,
      title: "Advertising Banners",
      description:
        "Eye-catching banners for shops, brands, events, and promotional campaigns.",
    },
    {
      icon: <FaPrint />,
      title: "Flex Banners",
      description:
        "High-quality flex banners with sharp graphics and vibrant colors.",
    },
    {
      icon: <FaPalette />,
      title: "Custom Banners",
      description:
        "Fully customized banner designs according to your size and requirements.",
    },
  ];

  const features = [
    "High-resolution printing",
    "Vibrant and long-lasting colors",
    "Custom sizes available",
    "Premium quality materials",
    "Fast turnaround time",
    "Affordable pricing",
  ];

  return (
    <div className="banner-page">
      {/* ================= HERO ================= */}
      <section className="banner-hero">
        <div className="banner-hero-overlay"></div>

        <div className="banner-hero-content">
          <span className="banner-badge">
            <FaPrint /> PROFESSIONAL BANNER PRINTING
          </span>

          <h1>
            Make Your Brand
            <span> Stand Out Big</span>
          </h1>

          <p>
            Get professionally printed banners with bold colors, sharp graphics,
            and premium finishing for maximum visibility.
          </p>

          <div className="banner-buttons">
            <button className="banner-primary-btn">
              Get a Free Quote <FaArrowRight />
            </button>

            <button className="banner-call-btn">
              <FaPhoneAlt /> Call Us
            </button>
          </div>

          <div className="banner-rating">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span>Trusted Printing Quality</span>
          </div>
        </div>

        <div className="hero-floating-card">
          <FaPrint />
          <div>
            <strong>Premium Print</strong>
            <small>Sharp & Vibrant</small>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="banner-intro">
        <div className="banner-container">
          <div className="banner-section-heading">
            <span>OUR SERVICES</span>
            <h2>
              Banner Printing That
              <strong> Gets Attention</strong>
            </h2>
            <p>
              From business promotions to special events, our professionally
              printed banners help your message get noticed.
            </p>
          </div>

          <div className="banner-service-grid">
            {bannerTypes.map((item, index) => (
              <div className="banner-service-card" key={index}>
                <div className="banner-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a href="#contact">
                  Learn More <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="banner-features">
        <div className="banner-container banner-feature-wrapper">
          <div className="banner-feature-image">
            <div className="banner-preview">
              <div className="preview-content">
                <span>YOUR BRAND</span>
                <h3>
                  PRINT
                  <br />
                  BIG.
                </h3>
                <p>MAKE AN IMPACT</p>
              </div>
            </div>
          </div>

          <div className="banner-feature-content">
            <span className="banner-small-title">
              <FaCheckCircle /> WHY CHOOSE US
            </span>

            <h2>
              Quality Printing.
              <strong> Powerful Results.</strong>
            </h2>

            <p>
              We combine premium printing materials, modern technology, and
              creative finishing to produce banners that look professional and
              attract attention.
            </p>

            <div className="feature-list">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <FaCheckCircle />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="banner-primary-btn">
              Start Your Order <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="banner-process">
        <div className="banner-container">
          <div className="banner-section-heading">
            <span>OUR PROCESS</span>
            <h2>
              Simple. Fast.
              <strong> Professional.</strong>
            </h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div>01</div>
              <h3>Choose Design</h3>
              <p>Share your artwork or let our designers create it for you.</p>
            </div>

            <div className="process-card">
              <div>02</div>
              <h3>Confirm Size</h3>
              <p>Select your required banner size, material, and finishing.</p>
            </div>

            <div className="process-card">
              <div>03</div>
              <h3>We Print</h3>
              <p>
                Your banner is printed using professional printing equipment.
              </p>
            </div>

            <div className="process-card">
              <div>04</div>
              <h3>Fast Delivery</h3>
              <p>Collect your order or get it delivered to your location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="banner-cta" id="contact">
        <div className="banner-cta-content">
          <span>READY TO PRINT?</span>

          <h2>
            Turn Your Message Into
            <strong> A Big Impression.</strong>
          </h2>

          <p>
            Contact us today for high-quality banner printing at competitive
            prices.
          </p>

          <button className="banner-primary-btn">
            Get Your Banner <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BANNER;
