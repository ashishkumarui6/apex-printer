import React from "react";
import styles from "./Services.module.css";

const services = [
  {
    icon: "🖨️",
    title: "Flex Banner Printing",
    description:
      "High-quality flex banner printing for shops, businesses, promotions, events and outdoor advertising.",
  },
  {
    icon: "🎨",
    title: "Vinyl Printing",
    description:
      "Durable and vibrant vinyl printing for wall graphics, vehicle branding, stickers and promotional displays.",
    featured: true,
  },
  {
    icon: "🏪",
    title: "Shop Branding",
    description:
      "Complete shop branding solutions including signage, banners, boards and promotional graphics.",
  },
  {
    icon: "🚗",
    title: "Vehicle Branding",
    description:
      "Turn your vehicle into a moving advertisement with professional vehicle wrapping and graphics.",
  },
  {
    icon: "📋",
    title: "Sunboard Printing",
    description:
      "Lightweight and premium sunboard printing for indoor displays, exhibitions, offices and retail stores.",
  },
  {
    icon: "💡",
    title: "LED Sign Boards",
    description:
      "Attractive LED sign boards that give your business excellent visibility both day and night.",
  },
  {
    icon: "🏷️",
    title: "Sticker Printing",
    description:
      "Custom stickers and labels with sharp colors, professional finishing and long-lasting quality.",
  },
  {
    icon: "📢",
    title: "Poster Printing",
    description:
      "Creative poster printing for advertisements, campaigns, events, offers and promotional activities.",
  },
];

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

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      {/* ================= HERO ================= */}
      <section className={styles.servicesHero}>
        <div className={`${styles.heroCircle} ${styles.circleOne}`}></div>

        <div className={`${styles.heroCircle} ${styles.circleTwo}`}></div>

        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.heroTag}>OUR SERVICES</span>

            <h1>
              Printing Solutions
              <span>That Stand Out.</span>
            </h1>

            <p>
              From eye-catching flex banners to premium branding materials, we
              provide high-quality printing solutions that make your brand
              impossible to ignore.
            </p>

            <div className={styles.heroButtons}>
              <a href="#services" className={styles.primaryBtn}>
                Explore Services <span>→</span>
              </a>

              <a href="/contact" className={styles.secondaryBtn}>
                Contact Us
              </a>
            </div>
          </div>

          <div className={styles.heroGraphic}>
            <div className={`${styles.printCard} ${styles.cardBack}`}></div>

            <div className={`${styles.printCard} ${styles.cardMain}`}>
              <div className={styles.printTop}>
                <span>FLEX</span>
                <small>PRINTING PRESS</small>
              </div>

              <div className={styles.printContent}>
                <span>YOUR BRAND</span>
                <strong>
                  PRINTED
                  <br />
                  BIGGER.
                </strong>
              </div>

              <div className={styles.printBottom}>
                <span>QUALITY</span>
                <span>CREATIVE</span>
                <span>FAST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>WHAT WE OFFER</span>
            <h2>Our Printing Services</h2>
            <p>
              Professional printing services designed for businesses, events,
              shops, schools and personal branding.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                className={`${styles.serviceCard} ${
                  service.featured ? styles.featured : ""
                }`}
                key={index}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/contact">
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className={styles.whySection}>
        <div className={`${styles.container} ${styles.whyWrapper}`}>
          <div className={styles.whyImage}>
            <div className={styles.imageBox}>
              <div className={styles.imageContent}>
                <span>PRINT</span>
                <strong>BIG</strong>
                <small>CREATE • PRINT • GROW</small>
              </div>
            </div>

            <div className={styles.experienceBox}>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>

          <div className={styles.whyContent}>
            <span className={styles.sectionLabel}>WHY CHOOSE US</span>

            <h2>
              Quality Printing.
              <span>Creative Results.</span>
            </h2>

            <p>
              We combine modern printing technology, creative design and
              professional finishing to deliver printing products that represent
              your brand perfectly.
            </p>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <div className={styles.feature} key={index}>
                  <div className={styles.featureIcon}>{feature.icon}</div>

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
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>HOW IT WORKS</span>
            <h2>Simple Printing Process</h2>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div className={styles.processItem} key={index}>
                <div className={styles.processNumber}>{step.number}</div>

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

export default Services;
