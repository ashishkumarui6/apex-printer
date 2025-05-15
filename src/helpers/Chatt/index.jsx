import React from "react";
import styles from "./index.module.css";
import chatt from "../../assets/whatsapp.png";
import { Link } from "react-router";
const Chatt = () => {
  return (
    <div className={styles.chatt}>
      <Link>
        <img src={chatt} alt="chatt" />
      </Link>
    </div>
  );
};

export default Chatt;
