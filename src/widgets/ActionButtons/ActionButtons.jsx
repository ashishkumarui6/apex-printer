import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaUserPlus } from "react-icons/fa";
import "./ActionButtons.css";

const ActionButtons = () => {
  const handleRegister = () => {
    window.location.href = "/register";
  };

  return (
    <div className="action-buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9140704566"
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <span className="action-icon">
          <FaWhatsapp />
        </span>
        <span className="action-text">WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href="tel:+91 9140704566"
        className="action-btn call-btn"
        aria-label="Call Now"
      >
        <span className="action-icon">
          <FaPhoneAlt />
        </span>
        <span className="action-text">Call Now</span>
      </a>

      {/* Register */}
      <button
        type="button"
        className="action-btn register-btn"
        onClick={handleRegister}
        aria-label="Register Now"
      >
        <span className="action-icon">
          <FaUserPlus />
        </span>
        <span className="action-text">Register</span>
      </button>
    </div>
  );
};

export default ActionButtons;
