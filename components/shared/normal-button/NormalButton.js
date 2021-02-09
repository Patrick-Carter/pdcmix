import React from "react";

import styles from "./NormalButton.module.scss";

const NormalButton = ({ text, type, onClick }) => {
  return <button type={type} onClick={onClick} className={styles.normalButton}>{text}</button>;
};

export default NormalButton;
