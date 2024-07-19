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
import GamePage from "./pages/GamePage";
import ErrorModal from "./components/ErrorModal";
import PlatformPage from "./pages/PlatformPage";

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
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("myWishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  const [total, setTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  const platformUrl = `https://api.rawg.io/api/parent_platforms/?key=${apiKey}`;

  //search for x games based on a search term
  useEffect(() => {
    const gamesUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${term}&page_size=15`;
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(gamesUrl);
        const data = await res.json();
        console.log(data.results);
        setGames(data.results);
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
  }, [games]);

  //sort games from newest to oldest based on release date
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

  //set header based on sort filter choice
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

  //local storage for cart
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  //local storage for wishlist
  useEffect(() => {
    localStorage.setItem("myWishlist", JSON.stringify(wishlist));
    console.log(wishlist);
  }, [wishlist]);

  //add to wishlist
  const addToWishList = (game) => {
    const isDuplicate = wishlist.some((item) => item.id === game.id);

    if (isDuplicate) {
      setErrorMessage("That game is already on your wishlist!");
      return;
    }
    setWishlist([...wishlist, game]);
  };

  //add to cart
  const addToCart = (game) => {
    const isDuplicate = cart.some((item) => item.id === game.id);

    if (isDuplicate) {
      setErrorMessage(
        "Duplicate purchasing and gifting is not currently supported"
      );
      return;
    }

    setCart([...cart, game]);
  };

  //reset modal on close
  const handleCloseErrorModal = () => {
    setErrorMessage("");
  };

  //generate a fake price for the game(api does not hold price data)
  const getPrice = (game) => {
    const ratio = (game.suggestions_count / game.reviews_count) * 1000;
    const scaledPrice = (ratio % 40) + 20;

    // Use a property of the game to determine the decimal point
    const decimalPoints = [0.0, 0.39, 0.49, 0.99];
    const uniqueIdentifier = game.id || game.slug; // Ensure there's a unique identifier
    const index =
      uniqueIdentifier
        .toString()
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      decimalPoints.length;

    const adjustedPrice = Math.floor(scaledPrice) + decimalPoints[index];

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
            setWishlist={setWishlist}
            addToWishList={addToWishList}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              loading={loading}
              sortedGames={sortedGames}
              outletHeader={outletHeader}
              getPrice={getPrice}
              signIn={signIn}
              addToWishList={addToWishList}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/game/:slug"
          element={<GamePage gamesData={games} apiKey={apiKey} />}
        />
        <Route
          path="/platforms/:platform"
          element={<PlatformPage apiKey={apiKey} />}
        />
        <Route
          path="/account"
          element={<AccountPage signIn={signIn} setSignIn={setSignIn} />}
        />
        <Route
          path="/wishlist"
          element={<WishlistPage wishlist={wishlist} addToCart={addToCart} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage total={total} setTotal={setTotal} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ErrorModal message={errorMessage} onClose={handleCloseErrorModal} />
    </>
  );
};

export default App;
