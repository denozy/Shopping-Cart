import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import NotFoundPage from "./pages/NotFoundPage";
import WishlistPage from "./pages/WishlistPage";
import LibraryPage from "./pages/LibraryPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  const [signIn, setSignIn] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout signIn={signIn} />}>
        <Route index element={<HomePage />} />
        <Route
          path="/account"
          element={<AccountPage signIn={signIn} setSignIn={setSignIn} />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
