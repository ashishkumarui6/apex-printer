import React from "react";
import styles from "./index.module.css";
const Card = ({ img, name, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default Card;
