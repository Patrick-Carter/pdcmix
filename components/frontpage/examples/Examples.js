import React from "react";

import Avatar from "../../shared/avatar/Avatar";
import NormalButton from "../../shared/normal-button/NormalButton";
import ActionButton from "../../shared/action-button/ActionButton";
import ReactPlayer from "react-player";
import Card from "../../shared/card/Card";
import styles from "./Examples.module.scss";

const Examples = ({}) => {
  return (
    <div className={styles.examples}>
      <ReactPlayer url="https://soundcloud.com/motley-000/basic-prod-by-seismic" />
      <Card>
        <Avatar image="/frontpage/testimony/motley.jpg" />
        <h6>Motley</h6>
        <p>
          "Pat's mixing is fast but he still works with me to get the exact
          sound I need"
        </p>
        <ActionButton text="Hear Before" />
        <NormalButton text="Next Song" />
      </Card>
    </div>
  );
};

export default Examples;
