import React from "react";
import "./Price.css";
const Price = () => {
  return (
    <>
      {/* ================= PRICING ================= */}
      <section className="pricing section" id="pricing">
        <div className="container">
          <div className="section-heading">
            <span>OUR PRICING</span>

            <h2>
              Simple & Affordable <strong>Packages</strong>
            </h2>

            <p>Choose a package according to your printing requirements.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>

              <div className="price">
                ₹25 <small>/sq.ft</small>
              </div>

              <p>Perfect for small requirements.</p>

              <ul>
                <li>✓ Standard Flex</li>
                <li>✓ High Resolution Print</li>
                <li>✓ Basic Finishing</li>
                <li>✓ Fast Delivery</li>
              </ul>

              <a href="#contact" className="price-btn">
                Get Started
              </a>
            </div>

            <div className="pricing-card popular">
              <div className="popular-label">MOST POPULAR</div>

              <h3>Professional</h3>

              <div className="price">
                ₹35 <small>/sq.ft</small>
              </div>

              <p>Ideal for businesses and events.</p>

              <ul>
                <li>✓ Premium Flex</li>
                <li>✓ High Resolution Print</li>
                <li>✓ Premium Finishing</li>
                <li>✓ Design Support</li>
                <li>✓ Fast Delivery</li>
              </ul>

              <a href="#contact" className="price-btn">
                Get Started
              </a>
            </div>

            <div className="pricing-card">
              <h3>Premium</h3>

              <div className="price">
                ₹50 <small>/sq.ft</small>
              </div>

              <p>For premium branding projects.</p>

              <ul>
                <li>✓ Premium Material</li>
                <li>✓ HD Printing</li>
                <li>✓ Creative Design</li>
                <li>✓ Premium Finishing</li>
                <li>✓ Priority Delivery</li>
              </ul>

              <a href="#contact" className="price-btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
