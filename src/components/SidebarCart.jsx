import React from "react";
import { useEffect, useRef } from "react";
import styles from "../styles/sidebarCart.module.css";

const SidebarCart = ({ cartVisibility, setCartVisibility, buttonRef }) => {
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
      <header>Cart</header>
      <ul>
        <div className={styles.listItemContainer}>
          <li className={styles.listItem}>dummy</li>
          <button>X</button>
        </div>
      </ul>
    </div>
  );
};

export default SidebarCart;
