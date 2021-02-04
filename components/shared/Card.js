import React from "react";

import styles from "../../styles/Card.module.css";

const Card = ({transition, children}) => {
  

  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  );
};

export default Card;
