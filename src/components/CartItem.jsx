import React from "react";
import styles from "../styles/sidebarCart.module.css";
import heartplus from "../assets/heart_plus.png";

const CartItem = ({ item }) => {
  return (
    <>
      <div key={item.id} className={styles.listItemContainer}>
        <button className={styles.wishlistBtn}>
          <img className={styles.cartIcon} src={heartplus} alt="" />
        </button>
        <li className={styles.listItem}>{item.name}</li>
        <button className={styles.deleteBtn}>X</button>
      </div>
    </>
  );
};

export default CartItem;
