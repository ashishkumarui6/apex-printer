import React from "react";
import { Link } from "react-router";
import { FaDownload } from "react-icons/fa";
import styles from "./index.module.css";

const Brochure = () => {
  return (
    <>
      <div className={styles.brochure}>
        <div className={styles.content}>
          <p>
            <span>Call Us For Free Quote Consultant</span>
            <Link>
              <span>+91-94533-85293</span>
            </Link>
          </p>
          <div className={styles.download}>
            <Link href={"/brochure.pdf"} download>
              <span className={styles.icon}>
                <FaDownload />
              </span>
              <span className={styles.text}>Download Brochure</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brochure;
