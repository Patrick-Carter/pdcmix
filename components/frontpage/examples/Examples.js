import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Avatar from "../../shared/avatar/Avatar";
import NormalButton from "../../shared/normal-button/NormalButton";
import ActionButton from "../../shared/action-button/ActionButton";
import ReactPlayer from "react-player";
import Card from "../../shared/card/Card";
import styles from "./Examples.module.scss";

const Examples = ({}) => {
  const [dimentions, setDimentions] = useState({ width: 280, height: 180 });

  const minScreen = useMediaQuery({ query: "(min-device-width: 200px" });

  const smScreen = useMediaQuery({ query: "(min-device-width: 580px" });

  const mdScreen = useMediaQuery({ query: "(min-device-width: 1061px" });

  const md2Screen = useMediaQuery({ query: "(min-device-width: 1256px" });

  const lgScreen = useMediaQuery({ query: "(min-device-width: 1550px" });

  const xlScreen = useMediaQuery({ query: "(min-device-width: 1800px" });

  console.log(minScreen, smScreen, mdScreen, lgScreen, xlScreen);

  useEffect(() => {
    console.log("In useEffect");

    if (minScreen) {
      setDimentions({ width: 280, height: 180 });
    }
    if (smScreen) {
      setDimentions({ width: 500, height: 210 });
    }
    if (mdScreen) {
      setDimentions({ width: 400, height: 235 });
    }
    if (md2Screen) {
      setDimentions({ width: 500, height: 250 });
    }
    if (lgScreen) {
      setDimentions({ width: 550, height: 280 });
    }
    if (xlScreen) {
      setDimentions({ width: 630, height: 300 });
    }
  }, [minScreen, smScreen, mdScreen, md2Screen, lgScreen, lgScreen]);

  return (
    <div className={styles.examples}>
      <div className={styles.mediaPlayer}>
        <ReactPlayer
          width={dimentions.width}
          height={dimentions.height}
          url="https://soundcloud.com/motley-000/basic-prod-by-seismic"
        />
      </div>
      <Card>
        <Avatar image="/frontpage/testimony/motley.jpg" />
        <h6 className={styles.artist}>Motley</h6>
        <p className={styles.quote}>
          "Pat's mixing is fast but he still works with me to get the exact
          sound I need"
        </p>
        <div className={styles.buttonContainer}>
          <ActionButton text="Hear Before" />
          <NormalButton text="Next Song" />
        </div>
      </Card>
    </div>
  );
};

export default Examples;
