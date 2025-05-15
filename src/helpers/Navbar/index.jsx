import React from "react";
import { IoHome } from "react-icons/io5";
import styles from "./index.module.css";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>Apex Printer</div>
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
              <Link href="/">
                <span>
                  <IoHome size={26} />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
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
