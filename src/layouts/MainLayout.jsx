import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import SidebarCategories from "../components/SidebarCategories";
import { useRef, useState } from "react";
import styles from "../styles/homepage.module.css";

const MainLayout = ({ total, setTotal, signIn, cart, setCart }) => {
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
        signIn={signIn}
      />
      <div className={styles.mainContainer}>
        <SidebarCategories signIn={signIn} />
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
      <SidebarCart
        cart={cart}
        setCart={setCart}
        buttonRef={buttonRef}
        cartVisibility={cartVisibility}
        setCartVisibility={setCartVisibility}
        total={total}
        setTotal={setTotal}
      />
    </>
  );
};

export default MainLayout;
