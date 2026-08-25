import React from "react";
import styles from "./Contact.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      {/* ================= HERO ================= */}
      <section className={styles.contactHero}>
        <div className={styles.heroShapeOne}></div>
        <div className={styles.heroShapeTwo}></div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Apex Flex Printing Press</span>

            <h1>
              Let's Print Your
              <span> Ideas Into Reality</span>
            </h1>

            <p>
              Need high-quality flex printing, banners, posters or outdoor
              advertising? Get in touch with our printing experts today.
            </p>

            <button className={styles.heroButton}>Get Free Quote</button>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>GET IN TOUCH</span>
            <h2>We'd Love To Hear From You</h2>
            <p>
              Have a printing requirement? Contact us and let's discuss your
              project.
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <FaPhoneAlt />
              </div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
              <span>Mon - Sat, 9 AM - 7 PM</span>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <p>info@apexprinter.com</p>
              <span>We reply within 24 hours</span>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <FaMapMarkerAlt />
              </div>
              <h3>Visit Us</h3>
              <p>Jagdishpur, India</p>
              <span>Visit our printing press</span>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <FaClock />
              </div>
              <h3>Working Hours</h3>
              <p>09:00 AM - 07:00 PM</p>
              <span>Saturday - Thusrsday</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <div className={styles.formLeft}>
              <span className={styles.formBadge}>FREE QUOTE</span>

              <h2>
                Tell Us About Your
                <span> Printing Project</span>
              </h2>

              <p>
                Fill out the form and our team will contact you shortly with the
                best printing solution and quotation.
              </p>

              <div className={styles.formFeatures}>
                <div>
                  <strong>01</strong>
                  <span>Premium Printing Quality</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Fast Delivery</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Affordable Pricing</span>
                </div>
              </div>
            </div>

            <form className={styles.contactForm}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>

                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter phone number" />
                </div>
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter email address" />
                </div>

                <div className={styles.inputGroup}>
                  <label>Printing Service</label>
                  <select>
                    <option>Select Service</option>
                    <option>Flex Printing</option>
                    <option>Vinyl Printing</option>
                    <option>Banner Printing</option>
                    <option>Poster Printing</option>
                    <option>Sunboard Printing</option>
                    <option>Hoarding Printing</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your printing requirement..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Enquiry
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              <span>READY TO PRINT?</span>
              <h2>Let's Create Something Amazing!</h2>
              <p>
                From small banners to large outdoor hoardings, we provide
                complete printing solutions.
              </p>
            </div>

            <button className={styles.ctaButton}>Call Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
