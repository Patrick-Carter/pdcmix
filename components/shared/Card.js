import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";

import Button from "./Button";

import styles from "../../styles/Card.module.css";

const Card = ({ image, title, body, onClick }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={image} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardBody}>{body}</p>
      <Button onClick={onClick} text="Next Song" color="#252c41" />
    </div>
  );
};

export default Card;
