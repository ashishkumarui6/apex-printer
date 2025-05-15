import React from "react";
import styles from "./index.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className={styles.content}>
            <div className={styles.logo}> Apex Printer</div>
            <div>
              <ul>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <IoLogoYoutube />
                </li>
              </ul>
            </div>
            <div>©2025 Berger Paints India</div>
            <div>Disclaimer | Privacy Policy | Terms & Conditions |</div>
          </div>
          <div className={styles.content}>
            <h2> Quick Links</h2>
            <h4>Home</h4>
            <h4>Company Profile</h4>
            <h4>News & Events</h4>
            <h4> Portfolio</h4>
            <h4> Privacy Policy</h4>
            <h4> Terms & Conditions</h4>
            <h4> Blog</h4>
          </div>
          <div className={styles.content}>
            <h2> Services</h2>
            <h4>School Stationary</h4>
            <h4>Diary</h4>
            <h4>Prospectus</h4>
            <h4> Flex Board</h4>
            <h4> Invoice</h4>
            <h4> V-Card</h4>
            <h4> Binding</h4>
            <h4> Invitation Card</h4>
          </div>

          <div className={styles.content}>
            <h2>Contact Details</h2>
            <h4>
              Address : Gashwa Technologies Pvt. Ltd. Kashyap Niwas ,Ground
              Floor BhattaKufer,Shimla
            </h4>
            <h4>
              <h3>Email :</h3>
              info@gashwatechnologies.com
            </h4>
            <h4>
              <h3>Sales :</h3>
              +91-94533-85293, +91-87958-58724
            </h4>
            <h4>
              <h3>Operation :</h3>
              +91-94533-85293, +91-87958-58724
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
