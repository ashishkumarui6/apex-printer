import React from "react";
import {
  FaBook,
  FaPen,
  FaFileAlt,
  FaIdCard,
  FaClipboard,
  FaPrint,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";
import "./index.css";

const STATIONERY = () => {
  const stationeryItems = [
    {
      icon: <FaBook />,
      title: "Notebooks & Registers",
      text: "Custom school and college notebooks, practical registers, and writing books.",
    },
    {
      icon: <FaFileAlt />,
      title: "Letterheads & Forms",
      text: "Professional letterheads, admission forms, examination forms, and office documents.",
    },
    {
      icon: <FaIdCard />,
      title: "ID Cards",
      text: "Durable student, teacher, staff, and visitor ID cards with custom designs.",
    },
    {
      icon: <FaClipboard />,
      title: "School Diaries",
      text: "Personalized school diaries with calendars, student details, and school branding.",
    },
    {
      icon: <FaPen />,
      title: "Pens & Writing Items",
      text: "Branded pens, pencils, markers, and other everyday stationery essentials.",
    },
    {
      icon: <FaPrint />,
      title: "Printed Stationery",
      text: "Complete customized stationery solutions for schools, colleges, and institutions.",
    },
  ];

  const benefits = [
    "Custom school & college branding",
    "High-quality paper and materials",
    "Professional printing & finishing",
    "Bulk order discounts",
    "Multiple sizes and designs",
    "Fast and reliable delivery",
  ];

  return (
    <div className="stationery-page">
      {/* ================= HERO ================= */}
      <section className="stationery-hero">
        <div className="stationery-circle circle-one"></div>
        <div className="stationery-circle circle-two"></div>

        <div className="stationery-container stationery-hero-grid">
          <div className="stationery-hero-content">
            <span className="stationery-badge">
              <FaGraduationCap />
              SCHOOL & COLLEGE STATIONERY
            </span>

            <h1>
              Stationery That
              <span> Represents</span>
              Your Institution.
            </h1>

            <p>
              Complete customized stationery solutions for schools, colleges,
              coaching institutes, and educational organizations.
            </p>

            <div className="stationery-actions">
              <button className="stationery-primary-btn">
                Get a Free Quote <FaArrowRight />
              </button>

              <button className="stationery-call-btn">
                <FaPhoneAlt /> Contact Us
              </button>
            </div>

            <div className="stationery-rating">
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>Trusted Institutional Printing</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="stationery-visual">
            <div className="stationery-paper paper-back"></div>

            <div className="stationery-paper paper-middle">
              <div className="paper-lines"></div>
            </div>

            <div className="stationery-notebook">
              <div className="notebook-top">
                <FaGraduationCap />
                <span>YOUR SCHOOL</span>
              </div>

              <h3>
                LEARN.
                <br />
                GROW.
                <br />
                ACHIEVE.
              </h3>

              <small>STUDENT NOTEBOOK</small>

              <div className="notebook-line"></div>
            </div>

            <div className="floating-stationery-card">
              <FaCheckCircle />
              <div>
                <strong>Custom Printing</strong>
                <small>Premium Quality</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="stationery-services">
        <div className="stationery-container">
          <div className="stationery-heading">
            <span>OUR STATIONERY COLLECTION</span>

            <h2>
              Everything Your
              <strong> Institution Needs</strong>
            </h2>

            <p>
              From notebooks and ID cards to forms and diaries, get all your
              educational stationery printed under one roof.
            </p>
          </div>

          <div className="stationery-grid">
            {stationeryItems.map((item, index) => (
              <div className="stationery-card" key={index}>
                <div className="stationery-icon">{item.icon}</div>

                <div className="stationery-number">0{index + 1}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <a href="#stationery-contact">
                  Explore Item <FaArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOM BRANDING ================= */}
      <section className="stationery-branding">
        <div className="stationery-container stationery-branding-grid">
          <div className="branding-visual">
            <div className="branding-card branding-card-one">
              <div className="branding-logo">
                <FaGraduationCap />
              </div>

              <strong>ABC COLLEGE</strong>
              <span>STUDENT ID CARD</span>
            </div>

            <div className="branding-card branding-card-two">
              <span>ACADEMIC</span>
              <strong>DIARY</strong>
              <small>2026 - 2027</small>
            </div>

            <div className="branding-pen">
              <FaPen />
            </div>
          </div>

          <div className="branding-content">
            <span className="stationery-small-title">
              <FaCheckCircle /> COMPLETE BRANDING
            </span>

            <h2>
              Put Your
              <strong> Identity Everywhere.</strong>
            </h2>

            <p>
              Make your institution look professional and consistent with
              customized stationery featuring your logo, colors, contact
              details, and institutional information.
            </p>

            <div className="benefit-list">
              {benefits.map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <FaCheckCircle />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button className="stationery-primary-btn">
              Discuss Your Requirement <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="stationery-products">
        <div className="stationery-container">
          <div className="stationery-heading">
            <span>POPULAR PRODUCTS</span>

            <h2>
              Made For
              <strong> Students & Institutions</strong>
            </h2>
          </div>

          <div className="product-showcase">
            <div className="product-item">
              <div className="product-icon">
                <FaBook />
              </div>
              <h3>Notebooks</h3>
              <p>Customized covers and premium inner pages.</p>
            </div>

            <div className="product-item">
              <div className="product-icon">
                <FaIdCard />
              </div>
              <h3>ID Cards</h3>
              <p>Professional student and staff identification cards.</p>
            </div>

            <div className="product-item">
              <div className="product-icon">
                <FaClipboard />
              </div>
              <h3>Diaries</h3>
              <p>Branded academic diaries for students and teachers.</p>
            </div>

            <div className="product-item">
              <div className="product-icon">
                <FaFileAlt />
              </div>
              <h3>Forms</h3>
              <p>Admission, examination, feedback, and official forms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="stationery-process">
        <div className="stationery-container">
          <div className="stationery-heading">
            <span>OUR PROCESS</span>

            <h2>
              From Your Idea
              <strong> To Your Stationery</strong>
            </h2>
          </div>

          <div className="stationery-process-grid">
            <div className="process-box">
              <div>01</div>
              <h3>Share Details</h3>
              <p>Tell us about your stationery requirements and quantity.</p>
            </div>

            <div className="process-box">
              <div>02</div>
              <h3>Design & Approve</h3>
              <p>We create your design and send it for approval.</p>
            </div>

            <div className="process-box">
              <div>03</div>
              <h3>Print</h3>
              <p>Your stationery is printed with professional equipment.</p>
            </div>

            <div className="process-box">
              <div>04</div>
              <h3>Delivery</h3>
              <p>
                Your complete stationery order is carefully packed and
                delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="stationery-cta" id="stationery-contact">
        <div className="stationery-cta-content">
          <span>BUILD YOUR INSTITUTIONAL BRAND</span>

          <h2>
            Professional Stationery.
            <strong> Professional Image.</strong>
          </h2>

          <p>
            Get customized stationery for your school, college, coaching
            institute, or educational organization.
          </p>

          <button className="stationery-primary-btn">
            Request a Quote <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default STATIONERY;
