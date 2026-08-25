import React from "react";
import { IoHome } from "react-icons/io5";
import styles from "./index.module.css";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <ul>
            <li
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <span>HOME</span>
              </Link>
            </li>
            <li className={styles.active_li}>
              <Link to="/about">
                <span>About Us</span>
              </Link>
              <ul className={styles.submenu}>
                <li>
                  <Link to="/printing">About Us</Link>
                </li>
                <li>
                  <Link to="/printing">Team</Link>
                </li>
                <li>
                  <Link to="/printing">Careers</Link>
                </li>
                <li>
                  <Link to="/printing">E-Brochure</Link>
                </li>
              </ul>
            </li>
            <li className={styles.active_li}>
              <Link to="/services">
                <span>Services</span>
              </Link>
              <ul className={styles.submenu}>
                <li>
                  <Link to="/printing">Printing</Link>
                </li>
                <li>
                  <Link to="/printing">Design</Link>
                </li>
                <li>
                  <Link to="/printing">Delivery</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/portfolio">
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
