import React from "react";
import { Link } from "react-router";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import styles from "./index.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.call_icon}>
          <Link>
            <span>
              <MdCall />
            </span>

            <span>+91-91407-04566</span>
          </Link>
        </div>
        <div className={styles.email_icon}>
          <Link>
            <span>
              <MdEmail />
            </span>
            <span>apex.jagdishpur101@gmail.com</span>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <span>
          <FaFacebookF />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaLinkedinIn />
        </span>
        <button>PAY Now</button>
      </div>
    </header>
  );
};

export default Header;
