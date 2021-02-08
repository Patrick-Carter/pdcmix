import React from "react";

import styles from "./ArtistHubFeatures.module.scss";

const ArtistHubFeatures = ({}) => {
  return (
    <div className={styles.artistHubFeatures}>
      <p className={styles.feature}>BACKUP FILES</p>
      <p className={styles.feature}>FAST COLLABORATION</p>
      <p className={styles.feature}>UPLOAD PROJECTS</p>
      <p className={styles.feature}>ONE PLACE</p>
      <p className={styles.feature}>SECURE</p>
      <p className={styles.feature}>ALWAYS ONLINE</p>
      <p className={styles.feature}>EASY REVISIONS</p>
      <p className={styles.feature}>HASSEL FREE</p>
    </div>
  );
};

export default ArtistHubFeatures;
