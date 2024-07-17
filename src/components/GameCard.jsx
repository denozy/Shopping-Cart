import styles from "../styles/gamesContainer.module.css";
import hades from "../assets/hades.png";
import placeholder from "../assets/star.png";
import playstation from "../assets/playstation.png";
import xbox from "../assets/xbox.png";
import nintendo from "../assets/nintendo-switch.png";
import pc from "../assets/pc.png";
import { NavLink } from "react-router-dom";

const GameCard = ({ cart, setCart, game }) => {
  const getPrice = (game) => {
    const price = (
      ((game.suggestions_count / game.reviews_count) * 1000) %
      50
    ).toFixed(2);
    return price;
  };

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  return (
    <>
      {/* start card */}
      <div className={styles.gameCard}>
        <img
          className={styles.gameImg}
          src={game.background_image}
          alt={game.name}
        />
        <div className={styles.gameDetailsContainer}>
          <div className={styles.consoleIconContainer}>
            {game.parent_platforms &&
              game.parent_platforms.map((platform) => {
                let iconSrc;
                let iconAlt = "";

                switch (platform.platform.id) {
                  case 1:
                    iconSrc = pc;
                    iconAlt = "Pc icon";
                    break;
                  case 2:
                    iconSrc = playstation;
                    iconAlt = "playStation icon";
                    break;
                  case 7:
                    iconSrc = nintendo;
                    iconAlt = "nintendo icon";
                    break;
                  case 3:
                    iconSrc = xbox;
                    iconAlt = "Xbox icon";
                    break;
                  default:
                    return null;
                }
                return (
                  <img
                    className={styles.consoleIcon}
                    src={iconSrc}
                    alt={iconAlt}
                    key={platform.platform.id}
                  />
                );
              })}
          </div>
          <NavLink>
            <h2 className={styles.gameTitle}>{game.name}</h2>
          </NavLink>
          <div className={styles.cartBtnContainer}>
            <div className={styles.priceContainer}>
              <p>Price: {getPrice(game)}</p>
            </div>
            <div className={styles.cartBtns}>
              {" "}
              <button
                onClick={() => addToCart(game)}
                className={styles.cardBtn}
              >
                Cart
              </button>
              <button
                onClick={() => console.log(game)}
                className={styles.cardBtn}
              >
                Wishlist
              </button>
            </div>
          </div>
          <div className={styles.cardInfoContainer}>
            <div className={styles.cardInfo}>
              <p className={styles.cardInfoText}>Release Date:</p>
              <p className={styles.cardInfoText}>{game.released}</p>
            </div>
            <hr></hr>

            <div className={styles.cardInfo}>
              <p className={styles.cardInfoText}>Genres:</p>
              <p className={styles.cardInfoText}>
                {game.genres.length > 0 ? game.genres[0].name : "Unlisted"}
              </p>
            </div>
            <hr></hr>

            <div className={styles.cardInfo}>
              <p className={styles.cardInfoText}>Community Rating:</p>
              <p className={styles.cardInfoText}>{game.rating} | 5</p>
            </div>
          </div>
        </div>
      </div>
      {/* end card */}
    </>
  );
};
export default GameCard;
