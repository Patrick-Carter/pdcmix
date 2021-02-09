import React from "react";

import styles from "./ActionButton.module.scss";

const ActionButton = ({ text, type, onClick, marginLeft }) => {
  return <button  type={type} onClick={onClick} className={styles.actionButton}>{text}</button>;
};

export default ActionButton;
