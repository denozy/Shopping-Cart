import React from "react";
import Navbar from "../components/Navbar";
import SidebarCart from "../components/SidebarCart";
import SidebarCategories from "../components/SidebarCategories";
const BarOverlay = () => {
  return (
    <>
      <Navbar />
      <SidebarCategories />
      <SidebarCart />
    </>
  );
};

export default BarOverlay;
