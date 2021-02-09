import React, { useState } from "react";

import Head from "next/head";

import ActionButton from "../components/shared/action-button/ActionButton";
import ArtistHubFeatures from "../components/frontpage/artisthub-features/ArtisthubFeatures";
import ExplainArtistHub from "../components/frontpage/explain-artisthub/ExplainArtistHub";
import NavBar from "../components/shared/nav-bar/NavBar";
import Hero from "../components/frontpage/hero/Hero";
import Examples from "../components/frontpage/examples/Examples";
import styles from "../styles/FrontPage.module.scss";

const VERSION = {
  before: "before",
  after: "after",
};

const testimonys = {
  motley: {
    title: "Motley",
    image: "/frontpage/testimony/motley.jpg",
    body: '"Patrick takes my music to the next level."',
    song: "https://soundcloud.com/motley-000/basic-prod-by-seismic",
    before: "",
  },
  bkrisho: {
    title: "Bkrisho",
    image: "/frontpage/testimony/bkrisho.jpg",
    body: '"I thought I didnt need mixing...then I met Patrick"',
    song: "https://soundcloud.com/patrickdcarter/call-me-mix",
    before: "https://soundcloud.com/patrickdcarter/callme-before",
  },
  kayeandre: {
    title: "Kayeandre",
    image: "/frontpage/testimony/kayeandre.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/kayeandre/soom",
    before: "",
  },
  josiah: {
    title: "Jo$iah",
    image: "/frontpage/testimony/josiah.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/patrickdcarter/momma-after-joiah",
    before: "https://soundcloud.com/patrickdcarter/momma-before-joiah",
  },
  mcflurry: {
    title: "Mcflurry",
    image: "/frontpage/testimony/mcflurry.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/mcflurryrap/can-we-collab",
    before: "https://soundcloud.com/patrickdcarter/can-we-collab-before",
  },
  euphoa: {
    title: "Euphoa",
    image: "/frontpage/testimony/euphoa.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/user-549009690/jupiter",
    before: "",
  },
  yunglo: {
    title: "Yung Lo",
    image: "/frontpage/testimony/yunglo.jpg",
    body:
      '"There are levels to this and Patrick will take you to the next level."',
    song: "https://soundcloud.com/patrickdcarter/1985-pdcmix",
    before: "",
  },
};

export default function Home() {
  return (
    <div className={styles.frontpageContainer}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PDCMIX</title>
      </Head>
      <div className={styles.topMargin}></div>
      <NavBar />
      <div className={styles.splashPage}>
        <Hero />
        <Examples />
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
      <section className={styles.sectionTwo}>
        <ExplainArtistHub />
        <ArtistHubFeatures />
      </section>
      <h2 className={styles.tagLine}>
        No one does online mixing and mastering like this.
      </h2>
      <section className={styles.sectionThree}>
        <div className={styles.contactForm}>
          <h1 className={styles.contactMeLabel}>Contact Me</h1>
          <form className={styles.contactForm}>
            <label for="name" className={styles.label}>
              Name
            </label>
            <input type="text" name="name" className={styles.field} />
            <label for="email" className={styles.label}>
              Email
            </label>
            <input type="email" name="email" className={styles.field} />
            <label for="message" className={styles.label}>
              Message
            </label>
            <textarea name="message" className={styles.messageField} />
            <ActionButton type="submit" text="Contact" />
          </form>
        </div>
        <div className={styles.contactDetails}>
          <p className={styles.contactDetailsItems}>Email</p>
          <p className={styles.contactDetailsItems}>pcarter@pdcmix.com</p>
          <p className={styles.contactDetailsItems}>Phone</p>
          <p className={styles.contactDetailsItems}>469-713-7016</p>
        </div>
      </section>
    </div>
  );
}
