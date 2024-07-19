import React from "react";
import { NavLink } from "react-router-dom";
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
  getPrice,
  signIn,
  addToWishList,
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

  useEffect(() => {
    const total = cart
      .map(getPrice)
      .reduce((acc, price) => acc + parseFloat(price), 0);
    setTotal(total);
  }, [cart]);

  const tax = parseFloat((total * 0.07).toFixed(2));
  const grandTotal = total + tax;

  const deleteItem = (id) => {
    console.log(id);
    setCart((current) => {
      return current.filter((game) => game.id !== id);
    });
  };

  // useEffect(() => {
  //   console.log("Cart updated:", cart);
  // }, [cart]);

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
            <CartItem
              getPrice={getPrice}
              key={game.id}
              deleteItem={deleteItem}
              game={game}
              signIn={signIn}
              addToWishList={addToWishList}
            />
          ))}
        </ul>
      </div>

      <div className={styles.checkoutContainer}>
        <button className={styles.checkoutBtn}>
          <NavLink to={"/checkout"}>Checkout</NavLink>
        </button>
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
