import { Outlet } from "react-router-dom";

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
