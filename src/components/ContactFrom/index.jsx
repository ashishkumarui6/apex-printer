import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const ContactFrom = () => {
  return (
    <div className={styles.contactFrom}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div style={{ background: "#e0e0e0" }}>
            <div className={styles.form}>
              <div className={styles.heading}>
                <h5>Get In Touch</h5>
                <span>Contact us today for inquiries</span>
              </div>
              <form action="">
                <div className={styles.row_sheet}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                  />

                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="How can we help?"
                  />

                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.social_media}>
            <span>follow us --</span>
            <span>
              <ul className={styles.meadia_icons}>
                <li>
                  {" "}
                  <Link>
                    <FaFacebookF />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>
                    <FiInstagram />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>
                    <FaXTwitter />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link>
                    <FaLinkedinIn />
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link>
                    <TfiYoutube />
                  </Link>{" "}
                </li>
              </ul>
            </span>
          </div>
          <div className={styles.heading}>
            <h5>CONTACT US FOR SERVICES</h5>
            <p>
              GashwaTechnologies, we are dedicated to providing top-notch
              services that cater to your unique needs. Our team of experts is
              committed to delivering excellence in every project we undertake.
              To get in touch with us, simply fill out the contact form on our
              website or give us a call at +91-94592-34219. We are available
              24/7 to answer your inquiries, offer guidance, and discuss how our
              services can benefit you.
            </p>
          </div>
          <div className={styles.intro_cantent}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
