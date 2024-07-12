import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NotFoundPage />}>
        <Route index element={<HomePage />} /> //index is route element that
        displays when no other child is selected. default.
        <Route path="*" element={<NotFoundPage />} /> //i think this makes it so
        any page thats not the listed as child goes here.
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
