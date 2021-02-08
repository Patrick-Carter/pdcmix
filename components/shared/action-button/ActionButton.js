import React from "react";

import styles from "./ActionButton.module.scss";

const ActionButton = ({ text }) => {
  return <button className={styles.actionButton}>{text}</button>;
};

export default ActionButton;
