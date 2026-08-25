import React from "react";
import styles from "./footer.module.css";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FiMapPin, FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* ================= BRAND ================= */}
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            Apex <span>Printer</span>
          </div>
          <p className={styles.description}>
            Professional printing solutions for schools, businesses, events and
            brands. Quality printing with creative designs.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="YouTube">
              <IoLogoYoutube />
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className={styles.footerColumn}>
          <h2>Quick Links</h2>

          <ul>
            <li>
              <a href="#">
                Home <FiArrowUpRight />
              </a>
            </li>
            <li>
              <a href="#">
                Company Profile <FiArrowUpRight />
              </a>
            </li>
            <li>
              <a href="#">
                News & Events <FiArrowUpRight />
              </a>
            </li>
            <li>
              <a href="#">
                Portfolio <FiArrowUpRight />
              </a>
            </li>
            <li>
              <a href="#">
                Privacy Policy <FiArrowUpRight />
              </a>
            </li>
            <li>
              <a href="#">
                Terms & Conditions <FiArrowUpRight />
              </a>
            </li>
            <li>
              <a href="#">
                Blog <FiArrowUpRight />
              </a>
            </li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div className={styles.footerColumn}>
          <h2>Our Services</h2>

          <ul>
            <li>
              <a href="#">School Stationery</a>
            </li>
            <li>
              <a href="#">Diary Printing</a>
            </li>
            <li>
              <a href="#">Prospectus</a>
            </li>
            <li>
              <a href="#">Flex Board</a>
            </li>
            <li>
              <a href="#">Invoice Printing</a>
            </li>
            <li>
              <a href="#">V-Card</a>
            </li>
            <li>
              <a href="#">Binding</a>
            </li>
            <li>
              <a href="#">Invitation Card</a>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div className={styles.footerColumn}>
          <h2>Contact Us</h2>

          <div className={styles.contactItem}>
            <FiMapPin />
            <p>
              Gashwa Technologies Pvt. Ltd., Kashyap Niwas, Ground Floor, Bhatta
              Kufer, Shimla
            </p>
          </div>

          <div className={styles.contactItem}>
            <FiMail />
            <p>
              <span>Email</span>
              info@gashwatechnologies.com
            </p>
          </div>

          <div className={styles.contactItem}>
            <FiPhone />
            <p>
              <span>Sales</span>
              +91-94533-85293
              <br />
              +91-87958-58724
            </p>
          </div>

          <div className={styles.contactItem}>
            <FiPhone />
            <p>
              <span>Operation</span>
              +91-94533-85293
              <br />
              +91-87958-58724
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <p>
            © 2025 <strong>Apex Printer</strong>. All Rights Reserved.
          </p>

          <div className={styles.bottomLinks}>
            <a href="#">Disclaimer</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
