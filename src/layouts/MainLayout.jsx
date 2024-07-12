import { Outlet } from "react-router-dom";

import BarOverlay from "../pages/BarOverlay";

const MainLayout = () => {
  return (
    <>
      <BarOverlay>
        <Outlet />
      </BarOverlay>
    </>
  );
};

export default MainLayout;
