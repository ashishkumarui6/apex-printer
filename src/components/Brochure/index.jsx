import React from "react";
import { FaDownload, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import styles from "./index.module.css";

const Brochure = () => {
  return (
    <section className={styles.brochure}>
      <div className={styles.content}>
        {/* Right Button */}
        <div className={styles.downloadBox}>
          <a
            href="/brochure.pdf"
            download="Apex-Printer-Brochure.pdf"
            className={styles.downloadBtn}
          >
            <span className={styles.icon}>
              <FaDownload />
            </span>

            <span className={styles.text}>
              <strong>Download Brochure</strong>
              <small>Get our latest brochure</small>
            </span>

            <span className={styles.arrow}>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
