import React from "react";
import styles from "./Header.module.css";
import CurrencyConverter from "../currencyConveter/currencyConverter";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Converting has never been so easy.</h1>

        <button className={styles.titleButton}>Discover more</button>
      </div>
      <CurrencyConverter />
    </div>
  );
};
export default Header;
