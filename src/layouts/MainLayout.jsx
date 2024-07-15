import { Outlet } from "react-router-dom";

import BarOverlay from "../pages/BarOverlay";
import HomePage from "../pages/HomePage";

const MainLayout = () => {
  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
};

export default MainLayout;
