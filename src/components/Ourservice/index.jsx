import React from "react";
import "./index.css";

const services = [
  {
    icon: "🖨️",
    title: "Flex Banner Printing",
    description:
      "High-quality flex banner printing for shops, businesses, promotions, events and outdoor advertising.",
  },
  {
    icon: "🎨",
    title: "Vinyl Printing",
    description:
      "Durable and vibrant vinyl printing for wall graphics, vehicle branding, stickers and promotional displays.",
    featured: true,
  },
  {
    icon: "🏪",
    title: "Shop Branding",
    description:
      "Complete shop branding solutions including signage, banners, boards and promotional graphics.",
  },
  {
    icon: "🚗",
    title: "Vehicle Branding",
    description:
      "Turn your vehicle into a moving advertisement with professional vehicle wrapping and graphics.",
  },
  {
    icon: "📋",
    title: "Sunboard Printing",
    description:
      "Lightweight and premium sunboard printing for indoor displays, exhibitions, offices and retail stores.",
  },
  {
    icon: "💡",
    title: "LED Sign Boards",
    description:
      "Attractive LED sign boards that give your business excellent visibility both day and night.",
  },
  {
    icon: "🏷️",
    title: "Sticker Printing",
    description:
      "Custom stickers and labels with sharp colors, professional finishing and long-lasting quality.",
  },
  {
    icon: "📢",
    title: "Poster Printing",
    description:
      "Creative poster printing for advertisements, campaigns, events, offers and promotional activities.",
  },
  {
    icon: "📢",
    title: "School & Collage Stationery Items",
    description:
      "Creative poster printing for advertisements, campaigns, events, offers and promotional activities.",
  },
];

const Ourservice = () => {
  return (
    <div className="services-page">
      {/* ================= HERO ================= */}
      <section className="servicesHero">
        <div className="heroCircle circleOne"></div>
        <div className="heroCircle circleTwo"></div>

        <div className="container heroContent">
          <div className="heroText">
            <span className="heroTag">OUR SERVICES</span>

            <h1>
              Printing Solutions
              <span>That Stand Out.</span>
            </h1>

            <p>
              From eye-catching flex banners to premium branding materials, we
              provide high-quality printing solutions that make your brand
              impossible to ignore.
            </p>

            <div className="heroButtons">
              <a href="#services" className="primaryBtn">
                Explore Services <span>→</span>
              </a>

              <a href="/contact" className="secondaryBtn">
                Contact Us
              </a>
            </div>
          </div>

          {/* ================= PRINTING GRAPHIC ================= */}
          <div className="heroGraphic">
            <div className="printCard cardBack"></div>

            <div className="printCard cardMain">
              <div className="printTop">
                <span>FLEX</span>
                <small>PRINTING PRESS</small>
              </div>

              <div className="printContent">
                <span>YOUR BRAND</span>

                <strong>
                  PRINTED
                  <br />
                  BIGGER.
                </strong>
              </div>

              <div className="printBottom">
                <span>QUALITY</span>
                <span>CREATIVE</span>
                <span>FAST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">WHAT WE DO</span>

            <h2>
              Our Printing <span>Services</span>
            </h2>

            <p>
              Professional printing and branding solutions designed to help your
              business stand out.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className={`service-card ${
                  service.featured ? "featured-card" : ""
                }`}
                key={index}
              >
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/contact" className="service-link">
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourservice;
