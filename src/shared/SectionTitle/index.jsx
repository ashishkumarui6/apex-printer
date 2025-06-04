import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router";

const SectionTitle = ({ title, linkName, to, name }) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.pageTitle}>{title}</h1>
      <ul className={styles.breadcrumb}>
        <li>
          <Link to={to}>{linkName}</Link>
        </li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

export default SectionTitle;
