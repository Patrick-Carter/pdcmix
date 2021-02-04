import React from "react";

import Button from "../shared/Button";
import styles from "../../styles/Testimony.module.css";

const Testimony = ({
  title,
  image,
  body,
  changeTestimony,
  changeSongVersion,
  disableButton,
  songVersion,
  showBeforeButton,
}) => {
  return (
    <div className={styles.testContainer}>
      <img className={styles.testImg} src={image} />
      <h2 className={styles.testTitle}>{title}</h2>
      <p className={styles.testBody}>{body}</p>
      {showBeforeButton && (
        <Button
          disabled={disableButton}
          onClick={changeSongVersion}
          text={songVersion === "after" ? "Hear Before" : "Hear After"}
          color="#252c41"
        />
      )}

      <Button
        disabled={disableButton}
        onClick={changeTestimony}
        text="Next Song"
        color="#252c41"
        marginTop=".5rem"
      />
    </div>
  );
};

export default Testimony;
