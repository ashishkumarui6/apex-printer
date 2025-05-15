import React from "react";
import styles from "./index.module.css";
import Card from "./card";
const DealsCard = () => {
  return (
    <div className={styles.dealsCard}>
      <ul className={styles.content}>
        <Card />
      </ul>
    </div>
  );
};

export default DealsCard;
