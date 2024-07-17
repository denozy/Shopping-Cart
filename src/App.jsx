import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import NotFoundPage from "./pages/NotFoundPage";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  const [games, setGames] = useState([]);
  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchGames = async () => {
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=2&search=skyrim`;
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data.results[0].parent_platforms[0]);
        setGames(data.results);
        console.log(data.results);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout signIn={signIn} />}>
        <Route index element={<HomePage loading={loading} games={games} />} />
        <Route
          path="/account"
          element={<AccountPage signIn={signIn} setSignIn={setSignIn} />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
