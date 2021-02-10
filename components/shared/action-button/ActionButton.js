import React from "react";

import styles from "./ActionButton.module.scss";

const ActionButton = ({ text, type, onClick, marginTop }) => {
  return <button style={{marginTop: marginTop}}  type={type} onClick={onClick} className={styles.actionButton}>{text}</button>;
};

export default ActionButton;
