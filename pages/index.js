import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ReactPlayer from "react-player";
import Head from "next/head";

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
  const [testimony, setTestimony] = useState(testimonys.motley);
  const [transition, setTransition] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const playerAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { duration: 800 },
    reverse: transition,
  });

  const handleChangeTestimony = (event) => {
    event.preventDefault();
    setTransition(true);
    setAutoPlay(true);

    setTimeout(() => {
      setTransition(false);

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
    }, 805);
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
      <Button text="Artist Hub" color="transparent" fontSize=".6rem"/>
      <div className={styles.content}>
        <animated.div style={playerAnimation} className={styles.musicVideoPlayer}>
          <ReactPlayer
            url={testimony.song}
            playing={autoPlay}
            width={320}
            height={180}
          />
        </animated.div>
        <div className={styles.middleText}>
          <PageTitle textOne="Incredible." textTwo="Mixes." />
          <Button text="Contact Me" color="#45d9fd" onClick={handleContactMe} />
        </div>
      </div>
      <div className={styles.testimony}>
        <Testimony
          title={testimony.title}
          image={testimony.image}
          body={testimony.body}
          transition={transition}
          onClick={handleChangeTestimony}
        />
      </div>
      <div className={styles.aboutMeTitle}>
        <PageTitle textOne="About" textTwo="Me" />
      </div>
    </div>
  );
}
