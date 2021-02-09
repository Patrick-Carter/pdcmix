import React from "react";

import Headline from "../../shared/headline/Headline";
import ActionButton from "../../shared/action-button/ActionButton";
import styles from "./ExplainArtistHub.module.scss";

const ExplainArtistHub = ({}) => {
  return (
    <div className={styles.explainArtistHub}>
      <Headline
        headline="Easy online collaboration"
        body="Collaboration is simple with the Artist Hub. Upload your project, request revisions, backup your files, even add other artists to help out. All in one secure location."
      />
      <ActionButton text="Learn More" />
      <div className={styles.angle}/>
    </div>
  );
};

export default ExplainArtistHub;
