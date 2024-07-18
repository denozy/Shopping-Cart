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
  const [filteredGames, setFilteredGames] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [sortTerm, setSortTerm] = useState("reviews_count");
  const [outletHeader, setOutletHeader] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("legend of zelda");
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("myCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [wishlist, setWishlist] = useState([]);
  const [total, setTotal] = useState(0);
  const apiKey = import.meta.env.VITE_API_KEY;
  const gameUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${term}&page_size=30`;

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(gameUrl);
        const data = await res.json();
        setGames(data.results);
        console.log(data.results);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [term]);

  //sorts games in descending order based on suggestions_count
  useEffect(() => {
    const gamesToFilter = [...games].filter((game) => {
      const added = parseInt(game.added, 10);
      const reviews = parseInt(game.reviews_count, 10);
      return reviews >= 40 && added >= 5;
    });
    setFilteredGames(gamesToFilter);
    console.log(filteredGames);
  }, [games]);

  useEffect(() => {
    if (sortTerm === "") return;
    const gamesToSort = [...filteredGames].sort((a, b) => {
      if (sortTerm === "released") {
        return new Date(b[sortTerm]) - new Date(a[sortTerm]);
      }
      return b[sortTerm] - a[sortTerm];
    });

    setSortedGames(gamesToSort);
  }, [filteredGames, sortTerm]);

  useEffect(() => {
    switch (sortTerm) {
      case "released":
        setOutletHeader("Released Date");
        break;
      case "rating":
        setOutletHeader("Highest Rated");
        break;
      case "added":
        setOutletHeader("User Favorites");
        break;
      default:
        setOutletHeader("Games");
    }
  }, [sortTerm]);

  useEffect(() => {
    console.log("Cart state changed:", cart);
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  const getPrice = (game) => {
    const ratio = (game.suggestions_count / game.reviews_count) * 1000;
    const scaledPrice = (ratio % 40) + 20;

    const decimalPoints = [0.0, 0.39, 0.49, 0.99];
    const randomDecimal =
      decimalPoints[Math.floor(Math.random() * decimalPoints.length)];

    const adjustedPrice = Math.floor(scaledPrice) + randomDecimal;

    return adjustedPrice.toFixed(2);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            total={total}
            setTotal={setTotal}
            cart={cart}
            setCart={setCart}
            signIn={signIn}
            search={search}
            setSearch={setSearch}
            setTerm={setTerm}
            setSortTerm={setSortTerm}
            getPrice={getPrice}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              cart={cart}
              setCart={setCart}
              loading={loading}
              sortedGames={sortedGames}
              outletHeader={outletHeader}
              getPrice={getPrice}
            />
          }
        />
        <Route
          path="/account"
          element={<AccountPage signIn={signIn} setSignIn={setSignIn} />}
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route
          path="/checkout"
          element={<CheckoutPage total={total} setTotal={setTotal} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
