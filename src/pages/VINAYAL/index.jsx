import React from "react";
import {
  FaPrint,
  FaPalette,
  FaBullhorn,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaStar,
  FaRulerCombined,
} from "react-icons/fa";
import "./index.css";

const VINAYAL = () => {
  const services = [
    {
      icon: <FaBullhorn />,
      title: "Vinyl Signage",
      description:
        "Professional vinyl signage for shops, offices, showrooms, and businesses.",
    },
    {
      icon: <FaPalette />,
      title: "Custom Vinyl Prints",
      description:
        "Create custom vinyl graphics with vibrant colors and sharp detailing.",
    },
    {
      icon: <FaPrint />,
      title: "Vehicle Graphics",
      description:
        "Transform cars, vans, and commercial vehicles with premium vinyl graphics.",
    },
    {
      icon: <FaRulerCombined />,
      title: "Wall Vinyl",
      description:
        "Decorate your walls with attractive custom-printed vinyl designs.",
    },
  ];

  const features = [
    "High-resolution printing",
    "Bright and vibrant colors",
    "Durable vinyl material",
    "Custom sizes and shapes",
    "Professional finishing",
    "Fast delivery",
  ];

  return (
    <div className="vinyl-page">
      {/* ================= HERO ================= */}
      <section className="vinyl-hero">
        <div className="vinyl-hero-shape vinyl-shape-one"></div>
        <div className="vinyl-hero-shape vinyl-shape-two"></div>

        <div className="vinyl-container vinyl-hero-wrapper">
          <div className="vinyl-hero-content">
            <span className="vinyl-badge">
              <FaPrint /> PROFESSIONAL VINYL PRINTING
            </span>

            <h1>
              Print It.
              <span> Stick It.</span>
              Make It Stand Out.
            </h1>

            <p>
              Premium vinyl printing for walls, windows, vehicles, shops,
              offices, events, and powerful brand promotions.
            </p>

            <div className="vinyl-buttons">
              <button className="vinyl-primary-btn">
                Get a Free Quote <FaArrowRight />
              </button>

              <button className="vinyl-call-btn">
                <FaPhoneAlt /> Call Us
              </button>
            </div>

            <div className="vinyl-rating">
              <div className="vinyl-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>Premium Quality Printing</span>
            </div>
          </div>

          {/* Vinyl Preview */}
          <div className="vinyl-hero-preview">
            <div className="vinyl-roll">
              <div className="vinyl-roll-inner"></div>
            </div>

            <div className="vinyl-sticker-card">
              <span>YOUR</span>
              <strong>BRAND</strong>
              <small>STAND OUT</small>
            </div>

            <div className="vinyl-floating-card">
              <FaCheckCircle />
              <div>
                <strong>Premium Vinyl</strong>
                <small>Sharp & Durable</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="vinyl-services">
        <div className="vinyl-container">
          <div className="vinyl-heading">
            <span>OUR VINYL SERVICES</span>

            <h2>
              Vinyl Printing For
              <strong> Every Purpose</strong>
            </h2>

            <p>
              From business branding to creative decoration, we provide
              professional vinyl printing solutions for every requirement.
            </p>
          </div>

          <div className="vinyl-service-grid">
            {services.map((service, index) => (
              <div className="vinyl-service-card" key={index}>
                <div className="vinyl-service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#vinyl-contact">
                  Learn More <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT VINYL ================= */}
      <section className="vinyl-about">
        <div className="vinyl-container vinyl-about-wrapper">
          <div className="vinyl-about-visual">
            <div className="vinyl-wall">
              <div className="vinyl-wall-text">
                <small>CREATIVE</small>
                <h3>
                  VINYL
                  <br />
                  DESIGN
                </h3>
                <span>YOUR BRAND • YOUR STYLE</span>
              </div>
            </div>

            <div className="vinyl-circle">
              <strong>100%</strong>
              <span>QUALITY</span>
            </div>
          </div>

          <div className="vinyl-about-content">
            <span className="vinyl-small-title">
              <FaCheckCircle /> WHY CHOOSE OUR VINYL PRINTING
            </span>

            <h2>
              High Quality.
              <strong> Long Lasting.</strong>
            </h2>

            <p>
              Our vinyl printing combines high-quality materials with
              professional printing technology to create graphics that look
              sharp, colorful, and professional.
            </p>

            <div className="vinyl-feature-list">
              {features.map((feature, index) => (
                <div className="vinyl-feature" key={index}>
                  <FaCheckCircle />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="vinyl-primary-btn">
              Start Your Order <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="vinyl-applications">
        <div className="vinyl-container">
          <div className="vinyl-heading">
            <span>WHERE CAN YOU USE VINYL?</span>

            <h2>
              Perfect For
              <strong> Branding & Decoration</strong>
            </h2>
          </div>

          <div className="vinyl-application-grid">
            <div className="vinyl-application">
              <span>01</span>
              <h3>Shop & Store Branding</h3>
              <p>
                Attractive graphics for storefronts, counters, glass doors, and
                promotional areas.
              </p>
            </div>

            <div className="vinyl-application">
              <span>02</span>
              <h3>Vehicle Branding</h3>
              <p>
                Turn your vehicle into a moving advertisement with custom vinyl
                graphics.
              </p>
            </div>

            <div className="vinyl-application">
              <span>03</span>
              <h3>Office Decoration</h3>
              <p>
                Add logos, motivational graphics, and creative designs to office
                walls and glass.
              </p>
            </div>

            <div className="vinyl-application">
              <span>04</span>
              <h3>Events & Promotions</h3>
              <p>
                Promote events, products, campaigns, and special offers with
                eye-catching vinyl graphics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="vinyl-process">
        <div className="vinyl-container">
          <div className="vinyl-heading">
            <span>OUR PROCESS</span>

            <h2>
              From Design To
              <strong> Perfect Print</strong>
            </h2>
          </div>

          <div className="vinyl-process-grid">
            <div className="vinyl-process-card">
              <div>01</div>
              <h3>Send Your Design</h3>
              <p>Send us your artwork or discuss your design requirements.</p>
            </div>

            <div className="vinyl-process-card">
              <div>02</div>
              <h3>Choose Material</h3>
              <p>
                Select the vinyl type, size, finish, and application method.
              </p>
            </div>

            <div className="vinyl-process-card">
              <div>03</div>
              <h3>Professional Printing</h3>
              <p>We print your design using professional-quality equipment.</p>
            </div>

            <div className="vinyl-process-card">
              <div>04</div>
              <h3>Ready For Use</h3>
              <p>Your finished vinyl is carefully prepared for installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="vinyl-cta" id="vinyl-contact">
        <div className="vinyl-cta-content">
          <span>READY TO CREATE?</span>

          <h2>
            Give Your Brand A<strong> Fresh New Look.</strong>
          </h2>

          <p>
            Get premium vinyl printing for your business, vehicle, office,
            event, or creative project.
          </p>

          <button className="vinyl-primary-btn">
            Get a Free Quote <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default VINAYAL;
