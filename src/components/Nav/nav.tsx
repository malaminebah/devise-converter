import React from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./nav.module.css";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navTitle}>
        <h2>Convert.</h2>
      </div>
      <div className={styles.navItems}>
        <button className={styles.navButton}>
          Features <FaAngleDown />
        </button>
        <button className={styles.navButton}>
          Pricing <FaAngleDown />
        </button>
        <button className={styles.navButton}>
          Use case <FaAngleDown />
        </button>
        <button className={styles.navButton}>
          Ressources <FaAngleDown />
        </button>
      </div>
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.signupButton}>Sing up</button>
      </div>
    </nav>
  );
};
export default NavBar;
