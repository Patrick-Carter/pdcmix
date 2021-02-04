import React from "react";
import { useSpring, animated } from "react-spring";

import Button from "./Button";

import styles from "../../styles/Card.module.css";

const Card = ({ image, title, body, onClick, transition }) => {
  const cardAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { duration: 800 },
    reverse: transition,
  });



  return (
    <animated.div style={cardAnimation} className={styles.cardContainer}>
      <img className={styles.cardImg} src={image} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardBody}>{body}</p>
      <Button disabled={transition} onClick={onClick} text="Next Song" color="#252c41" />
    </animated.div>
  );
};

export default Card;
