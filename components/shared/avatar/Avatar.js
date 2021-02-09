import React from "react";

import styles from "./Avatar.module.scss";

const Avatar = ({ image }) => {
  return (
    <>
      <img src={image} alt="avatar picture" className={styles.avatar} />
    </>
  );
};

export default Avatar;
