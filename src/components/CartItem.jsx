import React from "react";
import styles from "../styles/sidebarCart.module.css";
import heartplus from "../assets/heart_plus.png";

const CartItem = ({ game }) => {
  const getPrice = (game) => {
    const price = (
      ((game.suggestions_count / game.reviews_count) * 1000) %
      50
    ).toFixed(2);
    return price;
  };

  return (
    <>
      <div key={game.id} className={styles.listItemContainer}>
        <div className={styles.listItem}>
          <button className={styles.wishlistBtn}>
            <img className={styles.cartIcon} src={heartplus} alt="" />
          </button>
          <li>
            {game.name.slice(0, 8)}
            {game.name.length > 8 ? "..." : ""}
          </li>
          <button className={styles.deleteBtn}>X</button>
        </div>
        <div className={styles.priceSide}>{getPrice(game)}</div>
      </div>
    </>
  );
};

export default CartItem;
