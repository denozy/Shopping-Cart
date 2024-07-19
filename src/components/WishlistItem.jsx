import React from "react";
import styles from "../styles/wishlist.module.css";
import { NavLink } from "react-router-dom";

const Wishlist = ({ game }) => {
  return (
    <div className={styles.wishlistItem}>
      <div className={styles.imgContainer}>
        {" "}
        <img
          className={styles.gameImg}
          src={game.background_image}
          alt={game.name}
        />
      </div>
      <div className={styles.infoContainer}>
        {" "}
        <NavLink to={`/game/${game.slug}`}>
          <h2 className={styles.gameTitle}>{game.name}</h2>
        </NavLink>
      </div>
      <div className={styles.priceContainer}></div>
    </div>
  );
};

export default Wishlist;
