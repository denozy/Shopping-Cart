import React from "react";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import SidebarCategories from "../components/SidebarCategories";
const BarOverlay = () => {
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
      <SidebarCategories />
      <SidebarCart
        buttonRef={buttonRef}
        cartVisibility={cartVisibility}
        setCartVisibility={setCartVisibility}
      />
    </>
  );
};

export default BarOverlay;
