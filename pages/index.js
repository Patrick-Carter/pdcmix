import React, { useState } from "react";
import ReactPlayer from "react-player";
import Head from "next/head";
import useSound from "use-sound";

import Button from "../components/shared/Button";
import styles from "../styles/FrontPage.module.css";

import PageTitle from "../components/frontpage/PageTitle";
import Testimony from "../components/frontpage/Testimony";

const testimonys = {
  motley: {
    title: "Motley",
    image: "/frontpage/testimony/motley.jpg",
    body: '"Patrick takes my music to the next level."',
    song: "https://soundcloud.com/motley-000/basic-prod-by-seismic",
  },
  bkrisho: {
    title: "Bkrisho",
    image: "/frontpage/testimony/bkrisho.jpg",
    body: '"I thought I didnt need mixing...then I met Patrick"',
    song: "https://soundcloud.com/patrickdcarter/call-me-mix",
  },
  kayeandre: {
    title: "Kayeandre",
    image: "/frontpage/testimony/kayeandre.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/kayeandre/soom",
  },
  josiah: {
    title: "Jo$iah",
    image: "/frontpage/testimony/josiah.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/siahbnobody/in-da-night",
  },
  mcflurry: {
    title: "Mcflurry",
    image: "/frontpage/testimony/mcflurry.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/mcflurryrap/can-we-collab",
  },
  euphoa: {
    title: "Euphoa",
    image: "/frontpage/testimony/euphoa.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/user-549009690/jupiter",
  },
  yunglo: {
    title: "Yung Lo",
    image: "/frontpage/testimony/yunglo.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/patrickdcarter/1985-pdcmix",
  },
};

export default function Home() {
  const [basic, { stop, isPlaying }] = useSound("/music/Basic_MP3.mp3", {
    volume: 0.5,
  });

  const [testimony, setTestimony] = useState(testimonys.motley);

  const handleChangeTestimony = (event) => {
    event.preventDefault();

    switch (testimony.title) {
      case "Motley":
        setTestimony(testimonys.bkrisho);
        break;
      case "Bkrisho":
        setTestimony(testimonys.kayeandre);
        break;
      case "Kayeandre":
        setTestimony(testimonys.josiah);
        break;
      case "Jo$iah":
        setTestimony(testimonys.mcflurry);
        break;
      case "Mcflurry":
        setTestimony(testimonys.euphoa);
        break;
      case "Euphoa":
        setTestimony(testimonys.yunglo);
        break;
      case "Yung Lo":
        setTestimony(testimonys.motley);
        break;
      default:
        break;
    }
  };

  const handleContactMe = (event) => {
    event.preventDefault();

    console.log("nice");
  };

  return (
    <div className={styles.frontpageContainer}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Incredible. Mixes</title>
      </Head>
      <Button text="Artist Hub" color="transparent" />
      <div className={styles.content}>
        <div className={styles.musicVideoPlayer}>
          <ReactPlayer
            url={testimony.song}
            playing={true}
            width={320}
            height={180}
          />
        </div>
        <div className={styles.middleText}>
          <PageTitle />
          <Button text="Contact Me" color="#45d9fd" onClick={handleContactMe} />
        </div>
      </div>
      <div className={styles.testimony}>
        <Testimony
          title={testimony.title}
          image={testimony.image}
          body={testimony.body}
          onClick={handleChangeTestimony}
        />
      </div>
    </div>
  );
}
