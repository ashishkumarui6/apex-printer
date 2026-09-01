import React from "react";
import "./index.css";

const NOTFOUND = () => {
  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="notfound-page">
      {/* Background Shapes */}
      <div className="nf-orb nf-orb-one"></div>
      <div className="nf-orb nf-orb-two"></div>

      <div className="paper paper-one">📄</div>
      <div className="paper paper-two">✦</div>
      <div className="paper paper-three">✎</div>

      {/* Main Content */}
      <div className="notfound-container">
        {/* Printing Icon */}
        <div className="printer-illustration">
          <div className="printer-top">
            <div className="printer-light"></div>
          </div>

          <div className="printer-body">
            <div className="printer-screen">
              <span>404</span>
            </div>

            <div className="printer-slot"></div>

            <div className="printer-button"></div>
          </div>

          <div className="printer-paper">
            <div>PAGE</div>
            <strong>NOT FOUND</strong>
          </div>

          <div className="printer-feet left-foot"></div>
          <div className="printer-feet right-foot"></div>
        </div>

        {/* 404 Text */}
        <div className="error-number">
          <span>4</span>
          <span className="zero">0</span>
          <span>4</span>
        </div>

        <div className="error-badge">
          <span>●</span> ERROR 404
        </div>

        <h1>
          Oops! This Page
          <span>Got Misprinted.</span>
        </h1>

        <p className="error-description">
          Looks like this page didn't come out quite right. The page you're
          looking for may have been moved, deleted, or never existed.
        </p>

        {/* Buttons */}
        <div className="error-buttons">
          <button className="home-button" onClick={goHome}>
            <span>⌂</span>
            Go To Homepage
            <b>→</b>
          </button>

          <button className="back-button" onClick={goBack}>
            ← Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="helpful-links">
          <span>Maybe try:</span>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Footer */}
        <div className="notfound-footer">
          <div className="nf-logo">
            <span className="nf-logo-icon">P</span>
            <strong>
              APEX<span>PRINTER</span>
            </strong>
          </div>

          <p>Creative printing solutions for every idea.</p>
        </div>
      </div>
    </div>
  );
};

export default NOTFOUND;
