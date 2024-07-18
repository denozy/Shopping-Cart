import React from "react";
import { useEffect, useRef } from "react";
import styles from "../styles/sidebarCart.module.css";
import CartItem from "./CartItem";

const SidebarCart = ({
  cart,
  setCart,
  cartVisibility,
  setCartVisibility,
  buttonRef,
  total,
  setTotal,
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

  const getPrice = (game) => {
    const price = (
      ((game.suggestions_count / game.reviews_count) * 1000) %
      50
    ).toFixed(2);
    return parseFloat(price);
  };

  useEffect(() => {
    const total = cart.map(getPrice).reduce((acc, price) => acc + price, 0);
    setTotal(total);
  }, [cart]);

  const tax = parseFloat((total * 0.07).toFixed(2));
  const grandTotal = total + tax;

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebarCartContainer} ${
        cartVisibility ? styles.open : styles.closed
      }`}
    >
      <header className={styles.cartHeader}>
        {" "}
        <div className={styles.subtotalContainer}>
          <p>Subtotal:</p>
          <p>{total}</p>
        </div>
      </header>
      <div className={styles.cartContainer}>
        <ul>
          {cart.map((game) => (
            <CartItem key={game.id} game={game} />
          ))}
        </ul>
      </div>

      <div className={styles.checkoutContainer}>
        <button className={styles.checkoutBtn}>Checkout</button>
        <button
          onClick={() => setCartVisibility(false)}
          className={styles.ctnShoppingBtn}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SidebarCart;
