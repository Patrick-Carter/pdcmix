import React from "react";

import Headline from "../../shared/headline/Headline";
import styles from "./Hero.module.scss";

const Hero = ({}) => {
  return (
    <div className={styles.hero}>
      <Headline
        headline="Let your fans hear what you hear"
        body="Mixing is more important than ever. A professional mix helps you stand
        out and get the placements you need!"
      />
      <img
        src="/frontpage/images/Arrow.svg"
        alt="arrow pointing to examples"
        className={styles.arrow}
      />
      <img
        src="/frontpage/images/EarBuds.svg"
        alt="ear buds flowing across screen"
        className={styles.earpods}
      />
    </div>
  );
};

export default Hero;
