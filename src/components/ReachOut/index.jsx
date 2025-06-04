import React from "react";
import styles from "./index.module.css";
import contactBanner from "../../assets/Apex Welcome Banner.jpg";
const ReachOut = () => {
  return (
    <div className={styles.content}>
      <div className={styles.row}>
        <div className={styles.left}>
          <img src={contactBanner} alt="contactBanner" />
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <h5>Reach Out to Us</h5>
            </li>
            <li>
              <p>
                At GashwaTechnologies, we offer a comprehensive range of IT
                services to meet the diverse needs of our clients. With a team
                of highly skilled professionals and cutting-edge technology, we
                are committed to delivering top-quality solutions. Explore our
                key service offerings below:
              </p>
              <p>Languages are one of our specialties--</p>
            </li>
            <li>
              <button>Let's Talk</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
