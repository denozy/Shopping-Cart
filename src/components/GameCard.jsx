import styles from "../styles/gamesContainer.module.css";
import hades from "../assets/hades.png";
import placeholder from "../assets/star.png";
import playstation from "../assets/playstation.png";
import xbox from "../assets/xbox.png";
import nintendo from "../assets/nintendo-switch.png";
import { NavLink } from "react-router-dom";

const GameCard = ({ games, loading }) => {
  if (!loading) {
    return (
      <>
        {" "}
        {/* start card */}
        {games.map((game) => (
          <div key={game.id} className={styles.gameCard}>
            <img
              className={styles.gameImg}
              src={game.background_image}
              alt={game.name}
            />
            <div className={styles.gameDetailsContainer}>
              <div className={styles.consoleIconContainer}>
                <img className={styles.consoleIcon} src={playstation} alt="" />
                <img className={styles.consoleIcon} src={xbox} alt="" />
                <img className={styles.consoleIcon} src={nintendo} alt="" />
              </div>
              <NavLink>
                <h2 className={styles.gameTitle}>{game.name}</h2>
              </NavLink>
              <div className={styles.cartBtnContainer}>
                <button className={styles.cardBtn}>Cart</button>
                <button className={styles.cardBtn}>Wishlist</button>
              </div>
              <div className={styles.cardInfoContainer}>
                <div className={styles.cardInfo}>
                  <p className={styles.cardInfoText}>Release Date:</p>
                  <p className={styles.cardInfoText}>{game.released}</p>
                </div>
                <hr></hr>

                <div className={styles.cardInfo}>
                  <p className={styles.cardInfoText}>Genres:</p>
                  <p className={styles.cardInfoText}>{game.genres[0].name}</p>
                </div>
                <hr></hr>

                <div className={styles.cardInfo}>
                  <p className={styles.cardInfoText}>Community Rating:</p>
                  <p className={styles.cardInfoText}>{game.rating} | 5</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* end card */}
      </>
    );
  }
};
export default GameCard;
