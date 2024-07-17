import styles from "../styles/gamesContainer.module.css";
import placeholder from "../assets/star.png";
import smartphone from "../assets/smartphone.png";
import layout from "../assets/layout.png";
import { NavLink } from "react-router-dom";
import GameCard from "./GameCard";
import { useEffect } from "react";

const GamesContainer = ({ cart, setCart, sortedGames, loading }) => {
  return (
    <>
      <div className={styles.gamesContainer}>
        <header>
          <div className={styles.headerContent}>
            <h1>Editors Picks</h1>
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
                  cart={cart}
                  setCart={setCart}
                  game={game}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
