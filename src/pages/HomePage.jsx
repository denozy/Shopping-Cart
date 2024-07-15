import React from "react";
import { useRef, useState } from "react";
import styles from "../styles/homepage.module.css";

import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import SidebarCategories from "../components/SidebarCategories";
import GamesContainer from "../components/GamesContainer";

const HomePage = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const buttonRef = useRef(null);

  const toggleCart = () => {
    setCartVisibility(!cartVisibility);
  };

  return (
    <>
      <Navbar
        buttonRef={buttonRef}
        cartVisibility={cartVisibility}
        toggleCart={toggleCart}
        setCartVisibility={setCartVisibility}
      />
      <div className={styles.mainContainer}>
        <SidebarCategories />
        <GamesContainer />
      </div>
      <SidebarCart
        buttonRef={buttonRef}
        cartVisibility={cartVisibility}
        setCartVisibility={setCartVisibility}
      />
    </>
  );
};

export default HomePage;
