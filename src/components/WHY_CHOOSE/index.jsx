import React from "react";
import "./index.css";

const WHY_CHOOSE = () => {
  const features = [
    {
      icon: "✓",
      title: "Premium Quality",
      description: "Sharp colors and excellent print finishing.",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Professional printing at competitive prices.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Share Your Design",
      description: "Send us your design or tell us your printing requirements.",
    },
    {
      number: "02",
      title: "Get a Quote",
      description: "We provide transparent pricing according to your project.",
    },
    {
      number: "03",
      title: "We Print",
      description:
        "Your design is professionally printed using quality materials.",
    },
    {
      number: "04",
      title: "Fast Delivery",
      description: "Collect your order or get it delivered to your location.",
    },
  ];

  return (
    <div className="whyChoosePage">
      {/* ================= WHY CHOOSE US ================= */}
      <section className="whyChooseSection">
        <div className="whyChooseContainer whyChooseWrapper">
          <div className="whyChooseImage">
            <div className="whyChooseImageBox">
              <div className="whyChooseImageContent">
                <span>PRINT</span>
                <strong>BIG</strong>
                <small>CREATE • PRINT • GROW</small>
              </div>
            </div>

            <div className="whyChooseExperience">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>

          <div className="whyChooseContent">
            <span className="whyChooseLabel">WHY CHOOSE US</span>

            <h2>
              Quality Printing.
              <span>Creative Results.</span>
            </h2>

            <p className="whyChooseDescription">
              We combine modern printing technology, creative design and
              professional finishing to deliver printing products that represent
              your brand perfectly.
            </p>

            <div className="whyChooseFeatures">
              {features.map((feature, index) => (
                <div className="whyChooseFeature" key={index}>
                  <div className="whyChooseFeatureIcon">{feature.icon}</div>

                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="whyChooseProcess">
        <div className="whyChooseContainer">
          <div className="whyChooseHeading">
            <span>HOW IT WORKS</span>
            <h2>Simple Printing Process</h2>
          </div>

          <div className="whyChooseProcessGrid">
            {processSteps.map((step, index) => (
              <div className="whyChooseProcessItem" key={index}>
                <div className="whyChooseProcessNumber">{step.number}</div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WHY_CHOOSE;
