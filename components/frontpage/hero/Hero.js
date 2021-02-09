import React from "react";

import Headline from "../../shared/headline/Headline";
import styles from "./Hero.module.scss";

const Hero = ({}) => {
  return (
    <div className={styles.hero}>
      <Headline
        headline="Let your fans hear what you"
        underline="hear"
        body="Mixing is more important than ever. A professional mix helps you stand
        out and get the placements you need!"
      />     
    </div>
  );
};

export default Hero;
