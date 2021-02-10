import React from "react";

import styles from "./Avatar.module.scss";

const Avatar = ({ image, card }) => {
  return (
    <>
      <img src={image} alt="avatar picture" className={card === true ? styles.avatarCard : styles.avatarNormal} />
    </>
  );
};

export default Avatar;
