import React, { useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        {/* Desktop / Mobile Menu */}
        <div
          className={`${styles.right} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        >
          <ul className={styles.navList}>
            {/* Home */}
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>

            {/* About */}
            <li
              className={`${styles.dropdown} ${
                aboutOpen ? styles.dropdownOpen : ""
              }`}
            >
              <div className={styles.menuTitle}>
                <Link onClick={closeMenu}>About Us</Link>

                <button
                  className={styles.dropdownBtn}
                  onClick={() => setAboutOpen(!aboutOpen)}
                  aria-label="Toggle About Us menu"
                >
                  <FaChevronDown />
                </button>
              </div>

              <ul className={styles.submenu}>
                <li>
                  <Link to="/about" onClick={closeMenu}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" onClick={closeMenu}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/commigsoon" onClick={closeMenu}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/commigsoon" onClick={closeMenu}>
                    E-Brochure
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services */}
            <li
              className={`${styles.dropdown} ${
                servicesOpen ? styles.dropdownOpen : ""
              }`}
            >
              <div className={styles.menuTitle}>
                <Link onClick={closeMenu}>Services</Link>

                <button
                  className={styles.dropdownBtn}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-label="Toggle Services menu"
                >
                  <FaChevronDown />
                </button>
              </div>

              <ul className={styles.submenu}>
                <li>
                  <Link to="/flex" onClick={closeMenu}>
                    Flex Printing
                  </Link>
                </li>
                <li>
                  <Link to="/led" onClick={closeMenu}>
                    LED Sign Boards
                  </Link>
                </li>
                <li>
                  <Link to="/banner" onClick={closeMenu}>
                    Banner Printing
                  </Link>
                </li>
                <li>
                  <Link to="/vinayal" onClick={closeMenu}>
                    Vinyl Printing
                  </Link>
                </li>
                <li>
                  <Link to="/stationeryItems" onClick={closeMenu}>
                    School & Collage Stationery Items
                  </Link>
                </li>
              </ul>
            </li>

            {/* Other Links */}
            <li>
              <Link to="/portfolio" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>

            <li>
              <Link to="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>
                <span className={styles.contactBtn}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
