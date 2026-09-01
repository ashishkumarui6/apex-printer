import React from "react";
import "./portfolio.css";
import Price from "../../components/Price/Price.jsx";

const Portfolio = () => {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-subtitle">
              PROFESSIONAL FLEX PRINTING PRESS
            </span>

            <h1>
              Your Ideas.
              <span>Our Printing.</span>
              Amazing Results.
            </h1>

            <p>
              High-quality flex printing, banners, posters, vinyl printing and
              customized advertising solutions for businesses and events.
            </p>

            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">
                View Portfolio
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat">
                <h3>5000+</h3>
                <p>Projects Completed</p>
              </div>

              <div className="stat">
                <h3>100%</h3>
                <p>Quality Work</p>
              </div>
            </div>
          </div>

          <div className="hero-image_leftbox">
            <div className="hero-card">
              <div className="print-icon">🖨️</div>

              <h3>Premium Printing</h3>

              <p>Fast • Affordable • High Quality</p>

              <div className="print-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-heading">
            <span>OUR SERVICES</span>

            <h2>
              Professional Printing <strong>Services</strong>
            </h2>

            <p>
              Complete printing solutions for businesses, events, advertisements
              and personal requirements.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">🖼️</div>
              <h3>Flex Printing</h3>

              <p>
                High-resolution flex printing for indoor and outdoor advertising
                campaigns.
              </p>

              <a href="#contact">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">📢</div>
              <h3>Banner Printing</h3>

              <p>
                Attractive promotional banners for shops, businesses, events and
                campaigns.
              </p>

              <a href="#contact">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Vinyl Printing</h3>

              <p>
                Premium vinyl printing for walls, windows, vehicles and branding
                requirements.
              </p>

              <a href="#contact">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon">🏪</div>
              <h3>Shop Branding</h3>

              <p>
                Complete shop branding including boards, stickers, signage and
                promotional graphics.
              </p>

              <a href="#contact">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="section-heading">
            <span>OUR WORK</span>

            <h2>
              Recent <strong>Projects</strong>
            </h2>

            <p>
              Explore some of our latest flex printing and branding projects.
            </p>
          </div>

          <div className="portfolio-grid">
            {[
              ["SHOP BOARD", "Shop Advertisement", "Flex Board Printing"],
              ["EVENT BANNER", "Event Banner", "Large Format Printing"],
              ["BUSINESS", "Business Branding", "Complete Branding"],
              ["POSTER", "Promotional Poster", "Digital Printing"],
              ["VINYL", "Vinyl Branding", "Premium Vinyl Print"],
              ["FLEX DESIGN", "Creative Flex Design", "Custom Printing"],
            ].map(([title, name, category]) => (
              <div className="portfolio-item" key={name}>
                <div className="portfolio-placeholder">
                  <span>{title}</span>
                </div>

                <div className="portfolio-info">
                  <h3>{name}</h3>
                  <p>{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about section" id="about">
        <div className="container about-container">
          <div className="about-image">
            <div className="about-box">
              <div className="big-number">10+</div>
              <p>Years of Printing Experience</p>
            </div>
          </div>

          <div className="about-content">
            <span className="about-subtitle">ABOUT OUR PRESS</span>

            <h2>
              Turning Your <strong>Ideas Into Prints</strong>
            </h2>

            <p>
              We are a professional flex printing press providing high-quality
              printing and advertising solutions for businesses, organizations
              and individuals.
            </p>

            <p>
              From small posters to large outdoor banners, our team focuses on
              quality, attractive designs and fast delivery.
            </p>

            <div className="about-list">
              <div>
                <span>✓</span>
                High Quality Printing
              </div>

              <div>
                <span>✓</span>
                Affordable Pricing
              </div>

              <div>
                <span>✓</span>
                Fast Delivery
              </div>

              <div>
                <span>✓</span>
                Professional Designs
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Work With Us
            </a>
          </div>
        </div>
      </section>
      {/* add price card  */}
      <Price />
      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container cta-container">
          <div>
            <span>READY TO PRINT?</span>

            <h2>
              Let's Create Something <strong>Amazing Together.</strong>
            </h2>
          </div>

          <a href="#contact" className="btn cta-btn">
            Get Free Quote →
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="section-heading">
            <span>CONTACT US</span>

            <h2>
              Get In <strong>Touch</strong>
            </h2>

            <p>
              Have a printing requirement? Send us your details and we will
              contact you shortly.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>

                <div>
                  <h3>Our Location</h3>
                  <p>Main Market, Your City, India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>

                <div>
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>

                <div>
                  <h3>Email</h3>
                  <p>info@printpro.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>

                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Printing Requirement</label>

                <select id="service" defaultValue="">
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="flex">Flex Printing</option>
                  <option value="banner">Banner Printing</option>
                  <option value="vinyl">Vinyl Printing</option>
                  <option value="branding">Shop Branding</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your printing requirement..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Enquiry →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
