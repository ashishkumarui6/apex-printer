import React from "react";
import styles from "./index.module.css";
const Card = ({ img, name, title }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <h5 className={styles.name}>{name}</h5>
    </div>
  );
};

export default Card;
