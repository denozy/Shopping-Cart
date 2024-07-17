import React from "react";
import { useEffect, useRef } from "react";
import styles from "../styles/sidebarCart.module.css";
import heartplus from "../assets/heart_plus.png";
import CartItem from "./CartItem";

const SidebarCart = ({
  cart,
  setCart,
  cartVisibility,
  setCartVisibility,
  buttonRef,
}) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setCartVisibility(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setCartVisibility(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, buttonRef]);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebarCartContainer} ${
        cartVisibility ? styles.open : styles.closed
      }`}
    >
      <header className={styles.cartHeader}>Your Cart</header>
      <div className={styles.cartContainer}>
        <ul>
          {cart.map((item) => (
            <CartItem item={item} />
          ))}
          {/* cart item start */}

          {/* cart item end */}
        </ul>
      </div>
      <div className={styles.transactionContainer}>
        <ul>
          <div className={styles.priceContainer}>
            <li>Subtotal:</li>
            <li>Prices</li>
          </div>
          <div className={styles.priceContainer}>
            <li>Est. Tax:</li>
            <li>Prices</li>
          </div>
          <div className={styles.priceContainer}>
            <li>Total:</li>
            <li>Prices</li>
          </div>
        </ul>
      </div>
      <div className={styles.checkoutContainer}>
        <button className={styles.checkoutBtn}>Checkout</button>
        <button className={styles.ctnShoppingBtn}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default SidebarCart;
