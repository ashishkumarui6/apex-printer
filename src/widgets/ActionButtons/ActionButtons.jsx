import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaUserPlus,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import "./ActionButtons.css";

const ActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRegister = () => {
    window.location.href = "/register";
  };

  return (
    <div className={`action-wrapper ${isOpen ? "open" : ""}`}>
      {/* Action Options */}
      <div className="action-options">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919140704566"
          target="_blank"
          rel="noopener noreferrer"
          className="action-item whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <span className="action-label">WhatsApp</span>
          <span className="action-circle">
            <FaWhatsapp />
          </span>
        </a>

        {/* Call */}
        <a
          href="tel:+919140704566"
          className="action-item call"
          aria-label="Call Now"
        >
          <span className="action-label">Call Now</span>
          <span className="action-circle">
            <FaPhoneAlt />
          </span>
        </a>

        {/* Register */}
        <button
          type="button"
          className="action-item register"
          onClick={handleRegister}
          aria-label="Register Now"
        >
          <span className="action-label">Register</span>
          <span className="action-circle">
            <FaUserPlus />
          </span>
        </button>
      </div>

      {/* Main Toggle */}
      <button
        type="button"
        className="main-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open action menu"
        aria-expanded={isOpen}
      >
        <span className="toggle-icon">{isOpen ? <FaTimes /> : <FaPlus />}</span>
      </button>
    </div>
  );
};

export default ActionButtons;
