import React from "react";
import { Link } from "react-router";
import { MdCall, MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left - Contact Information */}
        <div className={styles.left}>
          <a
            href="tel:+919140704566"
            className={styles.contactItem}
            aria-label="Call Apex Printer"
          >
            <span className={styles.icon}>
              <MdCall />
            </span>
            <span>+91-91407-04566</span>
          </a>

          <a
            href="mailto:apex.jagdishpur101@gmail.com"
            className={styles.contactItem}
            aria-label="Email Apex Printer"
          >
            <span className={styles.icon}>
              <MdEmail />
            </span>
            <span>apex.jagdishpur101@gmail.com</span>
          </a>
        </div>

        {/* Right - Social Media & Payment */}
        <div className={styles.right}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>

          <Link to="/Payment" className={styles.payButton}>
            PAY NOW
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
