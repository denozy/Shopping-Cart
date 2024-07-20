import styles from "../styles/gamesContainer.module.css";
import placeholder from "../assets/star.png";
import smartphone from "../assets/smartphone.png";
import layout from "../assets/layout.png";
import { NavLink } from "react-router-dom";
import GameCard from "./GameCard";
import { useEffect } from "react";

const GamesContainer = ({
  outletHeader,
  sortedGames,
  loading,
  getPrice,
  signIn,
  addToWishList,
  addToCart,
  cart,
}) => {
  return (
    <>
      <div className={styles.gamesContainer}>
        <header>
          <div className={styles.headerContent}>
            <h1>{outletHeader}</h1>
            <div className={styles.displayIconContainer}>
              <p>Display options:</p>
              <img
                className={styles.displayIcon}
                src={layout}
                alt="Tile View"
              />
              <img
                className={styles.displayIcon}
                src={smartphone}
                alt="Phone View"
              />
            </div>
          </div>
        </header>
        <div className={styles.gameCards}>
          {loading
            ? "Loading..."
            : sortedGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  getPrice={getPrice}
                  signIn={signIn}
                  addToWishList={addToWishList}
                  addToCart={addToCart}
                  cart={cart}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
