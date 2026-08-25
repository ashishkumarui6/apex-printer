import React from "react";
import "./aboutpage.css";

const About = () => {
  return (
    <div>
      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <div className="hero-text">
            <span className="small-title">ABOUT US</span>

            <h1>
              Smart Solutions For <span>Your Business</span>
            </h1>

            <p>
              We provide smart, reliable and innovative digital solutions that
              help businesses grow, improve productivity and achieve their
              goals.
            </p>

            <a href="#about" className="btn">
              Learn More
            </a>
          </div>

          <div className="hero-image">
            <div className="image-box">
              <div className="image-content">
                <span>Smart</span>
                <strong>Solutions</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <div className="about-card">
              <span className="card-number">01</span>
              <h3>Innovation</h3>
              <p>
                Modern and effective solutions designed according to your
                business needs.
              </p>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">WHO WE ARE</span>

            <h2>We Build Digital Solutions That Make Business Easier</h2>

            <p>
              Easy Smart Solution is focused on delivering quality digital and
              technology solutions for businesses. Our goal is to make complex
              processes simple, efficient and easy to manage.
            </p>

            <p>
              We combine modern technology, creative ideas and professional
              services to provide solutions that deliver real value to our
              customers.
            </p>

            <div className="about-points">
              <div className="point">
                <span>✓</span>
                <div>
                  <h4>Professional Service</h4>
                  <p>Reliable and customer-focused solutions.</p>
                </div>
              </div>

              <div className="point">
                <span>✓</span>
                <div>
                  <h4>Modern Technology</h4>
                  <p>Using modern tools and technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION VISION ================= */}
      <section className="mission-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">OUR PURPOSE</span>

            <h2>Mission & Vision</h2>

            <p>
              Our purpose is to create simple and smart solutions that help
              people and businesses succeed.
            </p>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="icon">💡</div>

              <h3>Our Mission</h3>

              <p>
                To provide high-quality, affordable and innovative technology
                solutions that solve real business problems.
              </p>
            </div>

            <div className="mission-card">
              <div className="icon">🚀</div>

              <h3>Our Vision</h3>

              <p>
                To become a trusted technology partner by delivering smart
                solutions, excellent service and long-term value.
              </p>
            </div>

            <div className="mission-card">
              <div className="icon">🤝</div>

              <h3>Our Values</h3>

              <p>
                We believe in trust, quality, innovation, teamwork and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">WHY CHOOSE US</span>

            <h2>Why Choose Easy Smart Solution?</h2>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">01</div>

              <h3>Quality</h3>

              <p>
                We focus on quality and provide solutions that meet professional
                standards.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">02</div>

              <h3>Experience</h3>

              <p>
                Our approach combines practical knowledge with modern
                technology.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">03</div>

              <h3>Support</h3>

              <p>
                We provide reliable support and assistance whenever our
                customers need us.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">04</div>

              <h3>Innovation</h3>

              <p>
                We continuously explore new ideas and technologies to improve
                our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="container cta">
          <div>
            <span className="section-label">LET'S WORK TOGETHER</span>

            <h2>Have a Project in Mind?</h2>

            <p>
              Let's create a smart and effective solution for your business.
            </p>
          </div>

          <a href="#contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
