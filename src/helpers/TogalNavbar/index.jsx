import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styles from "./index.module.css";
import logo from "../../assets/logo.png";

const TogalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>
        <div className={`${styles.right} ${isOpen ? styles.show : ""}`}>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <IoHome size={22} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span>Services</span>
              </Link>
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

export default TogalNavbar;
