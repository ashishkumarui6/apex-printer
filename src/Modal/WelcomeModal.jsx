import React, { useEffect, useState } from "react";
import "./WelcomeModal.css";

const WelcomeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("websiteVisited");

    if (!alreadyVisited) {
      setShowModal(true);
    }
  }, []);

  const handleContinue = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2200);
  };

  const handleClose = () => {
    localStorage.setItem("websiteVisited", "true");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="welcome-overlay">
      <div className="welcome-modal">
        {/* Close Button */}
        <button className="close-btn" onClick={handleClose}>
          ×
        </button>

        {/* PROCESSING */}
        {processing && (
          <div className="modal-content">
            <div className="loader-wrapper">
              <div className="loader"></div>
              <span>⏳</span>
            </div>

            <h2>Processing...</h2>

            <p>Please wait while we prepare your experience.</p>

            <div className="progress-bar">
              <div className="progress"></div>
            </div>

            <small>Please don't close this window</small>
          </div>
        )}

        {/* SUCCESS */}
        {!processing && success && (
          <div className="modal-content success-content">
            <div className="success-icon">✓</div>

            <h2>Success!</h2>

            <p>Your request has been successfully processed.</p>

            <button className="continue-btn" onClick={handleClose}>
              Continue to Website →
            </button>
          </div>
        )}

        {/* INITIAL MODAL */}
        {!processing && !success && (
          <div className="modal-content">
            <div className="welcome-icon">✨</div>

            <div className="badge">WELCOME</div>

            <h1>
              Welcome to <span>Our Website</span>
            </h1>

            <p>
              We're happy to have you here. Get ready for a premium digital
              experience.
            </p>

            <div className="feature-list">
              <div className="feature">
                <span>⚡</span>
                <div>
                  <strong>Fast Experience</strong>
                  <small>Lightning-fast performance</small>
                </div>
              </div>

              <div className="feature">
                <span>🔒</span>
                <div>
                  <strong>Secure & Safe</strong>
                  <small>Your experience is protected</small>
                </div>
              </div>

              <div className="feature">
                <span>🚀</span>
                <div>
                  <strong>Premium Service</strong>
                  <small>Designed for you</small>
                </div>
              </div>
            </div>

            <button className="continue-btn" onClick={handleContinue}>
              Get Started
              <span>→</span>
            </button>

            <button className="skip-btn" onClick={handleClose}>
              Skip for now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeModal;
