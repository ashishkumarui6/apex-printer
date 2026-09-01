import React, { useEffect, useState } from "react";
import "./index.css";

const COMMING_SOON = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2026-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-page">
      {/* Animated Background */}
      <div className="gradient-orb orb-one"></div>
      <div className="gradient-orb orb-two"></div>
      <div className="gradient-orb orb-three"></div>

      {/* Decorative Lines */}
      <div className="decor-line line-one"></div>
      <div className="decor-line line-two"></div>

      <main className="coming-container">
        {/* Logo */}
        <div className="coming-logo">
          <div className="logo-icon">P</div>
          <span>
            APEX<span>PRINTER</span>
          </span>
        </div>

        {/* Badge */}
        <div className="coming-badge">
          <span className="pulse-dot"></span>
          WEBSITE UNDER DEVELOPMENT
        </div>

        {/* Main Heading */}
        <h1>
          Something
          <span>Amazing</span>
          Is Coming
        </h1>

        <p className="coming-description">
          We are working on something creative, powerful and memorable. Our new
          printing experience is almost ready.
        </p>

        {/* Countdown */}
        <div className="countdown">
          <div className="time-box">
            <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
            <span>Days</span>
          </div>

          <div className="time-separator">:</div>

          <div className="time-box">
            <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
            <span>Hours</span>
          </div>

          <div className="time-separator">:</div>

          <div className="time-box">
            <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
            <span>Minutes</span>
          </div>

          <div className="time-separator">:</div>

          <div className="time-box">
            <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
            <span>Seconds</span>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-wrapper">
          <div className="progress-top">
            <span>Launching Soon</span>
            <span>85%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="coming-actions">
          <button className="notify-btn">
            Notify Me
            <span>→</span>
          </button>

          <button className="explore-btn">Explore Services</button>
        </div>

        {/* Services */}
        <div className="service-tags">
          <span>✦ Flex Printing</span>
          <span>✦ Visiting Cards</span>
          <span>✦ Banner Printing</span>
          <span>✦ Graphic Design</span>
        </div>

        {/* Footer */}
        <div className="coming-footer">
          <p>© 2026 Apex Printer. All Rights Reserved.</p>
          <p>
            Crafted with <span>♥</span> for creative printing
          </p>
        </div>
      </main>
    </div>
  );
};

export default COMMING_SOON;
