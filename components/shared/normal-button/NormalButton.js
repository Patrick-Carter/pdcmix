import React from "react";

import styles from "./NormalButton.module.scss";

const NormalButton = ({ text }) => {
  return <button className={styles.NormalButton}>{text}</button>;
};

export default NormalButton;
