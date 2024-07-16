import React from "react";
import styles from "../styles/gamesContainer.module.css";
import placeholder from "../assets/star.png";
import hades from "../assets/hades.png";
import { NavLink } from "react-router-dom";

const GamesContainer = () => {
  return (
    <>
      <div className={styles.gamesContainer}>
        <header>
          <div className={styles.headerContent}>
            <h1>Trending</h1>
            <div className={styles.displayIconContainer}>
              <p>Display options:</p>
              <img
                className={styles.displayIcon}
                src={placeholder}
                alt="Tile View"
              />
              <img
                className={styles.displayIcon}
                src={placeholder}
                alt="Phone View"
              />
            </div>
          </div>
        </header>
        <div className={styles.gameCards}>
          {/* start card */}
          <div className={styles.gameCard}>
            <img className={styles.gameImg} src={hades} alt="Game Image" />
            <div className={styles.gameDetailsContainer}>
              <div className={styles.consoleIconContainer}>
                <img className={styles.consoleIcon} src={placeholder} alt="" />
                <img className={styles.consoleIcon} src={placeholder} alt="" />
                <img className={styles.consoleIcon} src={placeholder} alt="" />
              </div>
              <NavLink>
                <h2 className={styles.gameTitle}>Hades 2</h2>
              </NavLink>
              <div className={styles.cartBtnContainer}>
                <button className={styles.cardBtn}>Cart</button>
                <button className={styles.cardBtn}>Wishlist</button>
              </div>
              <div className={styles.cardInfoContainer}>
                <div className={styles.cardInfo}>
                  <p className={styles.cardInfoText}>Release Date:</p>
                  <p className={styles.cardInfoText}>placeholder</p>
                </div>
                <hr></hr>

                <div className={styles.cardInfo}>
                  <p className={styles.cardInfoText}>Genres:</p>
                  <p className={styles.cardInfoText}>placeholder</p>
                </div>
                <hr></hr>

                <div className={styles.cardInfo}>
                  <p className={styles.cardInfoText}>Chart:</p>
                  <p className={styles.cardInfoText}>placeholder</p>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
