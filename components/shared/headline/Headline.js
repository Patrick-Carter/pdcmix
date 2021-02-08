import React from "react";

import styles from "./Headline.module.scss";

const Headline = ({ headline, body }) => {
  return (
    <>
      <h1 className={styles.healine}>{headline}</h1>
      <p className={styles.details}>{body}</p>
    </>
  );
};

export default Headline;
