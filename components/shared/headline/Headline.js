import React from "react";

import styles from "./Headline.module.scss";

const Headline = ({ headline, body, underline }) => {
  return (
    <>
      <h1 className={styles.headline}>{headline}<span className={styles.underline}>{underline}</span></h1>
      <p className={styles.details}>{body}</p>
    </>
  );
};

export default Headline;
