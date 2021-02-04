import React from "react";

import Button from "../shared/Button";
import styles from "../../styles/Testimony.module.css";

const Testimony = ({ title, image, body, onClick, disableButton }) => {
  return (
    <div className={styles.testContainer}>
      <img className={styles.testImg} src={image} />
      <h2 className={styles.testTitle}>{title}</h2>
      <p className={styles.testBody}>{body}</p>
      <Button
        disabled={disableButton}
        onClick={onClick}
        text="Next Song"
        color="#252c41"
      />
    </div>
  );
};

export default Testimony;
