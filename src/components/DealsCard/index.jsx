import React from "react";
import styles from "./index.module.css";
import Card from "./card";
import graphic_img from "../../assets/graphic_img.png";
import { Link } from "react-router";

// Define card data
const cards = [
  { img: graphic_img, title: "Deal 1", name: "Flex Board", link: "/flexBoard" },
  {
    img: graphic_img,
    title: "Deal 2",
    name: "School Stationary",
    link: "/schoolstationary",
  },
  {
    img: graphic_img,
    title: "Deal 3",
    name: "Graphic Designing",
    link: "/graphicdesigning",
  },
  {
    img: graphic_img,
    title: "Deal 4",
    name: "Invitation Card",
    link: "/invitationcard",
  },
  {
    img: graphic_img,
    title: "Deal 5",
    name: "Prospectus",
    link: "/prospectus",
  },
];

const DealsCard = () => {
  return (
    <div className={styles.dealsCard}>
      <ul className={styles.cardGrid}>
        {cards.map((it, ind) => (
          <li key={ind} className={styles.cardItem}>
            <Link key={ind} to={it.link}>
              <Card img={it.img} title={it.title} name={it.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DealsCard;
