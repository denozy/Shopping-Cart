import React from "react";
import styles from "../styles/sidebarCart.module.css";
import heartplus from "../assets/heart_plus.png";
import trash from "../assets/delete.png";

const CartItem = ({ deleteItem, game }) => {
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
          <div className={styles.cartItemBtnContainer}>
            <button className={styles.wishlistBtn}>
              <img
                className={styles.cartIcon}
                src={heartplus}
                alt="Save to Wishlist"
              />
            </button>
            <button
              onClick={() => deleteItem(game.id)}
              className={styles.deleteBtn}
            >
              <img className={styles.cartIcon} src={trash} alt="Delete" />
            </button>
          </div>

          <div className={styles.cartItemContainer}>
            <img
              className={styles.cartGameImg}
              src={game.background_image}
              alt={game.name}
            />
            <li>
              {game.name}
              {/* {game.name.length > 8 ? "..." : ""} */}
            </li>
          </div>
        </div>
        <div className={styles.priceSide}>{getPrice(game)}</div>
      </div>
    </>
  );
};

export default CartItem;
