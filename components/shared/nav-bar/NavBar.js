import React from "react";

import styles from "./NavBar.module.scss";

const NavBar = ({}) => {
  return (
    <div className={styles.navContainer}>
      <header>
        <h3 className={styles.logo}>PDCMIX</h3>
        <nav>
          <ul className={styles.navLinks}>
            <li className={styles.link}>Artist Hub</li>
            <li className={styles.link}>Contact Me</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
