import React from "react";

const GameCard = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default GameCard;
