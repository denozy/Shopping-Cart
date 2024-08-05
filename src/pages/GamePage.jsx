import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/gamepage.module.css";
import PreviewImg from "../components/PreviewImg";

const GamePage = ({ gamesData, apiKey }) => {
  const { slug } = useParams();
  const [game, setGame] = useState(null); //data from slug api call
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState(null); //og data sorted from og call, has screenshots
  const [displayImg, setDisplayImg] = useState(0);

  //data fetch based on slug
  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);
      const gameUrl = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;
      try {
        const res = await fetch(gameUrl);
        const data = await res.json();
        setGame(data);
      } catch (error) {
        console.log("Error fetching game data", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchGame();
    }
  }, [slug]);

  useEffect(() => {
    if (!game) return;
    const filteredGame = gamesData.find((data) => data.id === game.id);
    if (filteredGame) {
      setGameData(filteredGame);
    }
  }, [game, gamesData]);

  useEffect(() => {
    if (!game) return;
    setDisplayImg(1);
  }, [gamesData]);

  const handleImageClick = (index) => {
    setDisplayImg(index);
  };

  if (loading) return <p>Loading...</p>;
  if (!game || !gameData) return <p>game data not available</p>;

  return (
    <div className={styles.gamepageContainer}>
      <div className={styles.interiorPageContainer}>
        <header>
          <h1>{game.name}</h1>
        </header>
        <div className={styles.gameDetails}>
          <div className={styles.gameImageBoxes}>
            <div className={styles.check}>
              <img
                className={styles.majorImg}
                src={gameData.short_screenshots[displayImg]?.image}
                alt=""
              />
              <div className={styles.imgPreviewContainer}>
                {gameData.short_screenshots.map((screenshot, index) => (
                  <PreviewImg
                    key={index}
                    screenshot={screenshot}
                    index={index}
                    handleImageClick={handleImageClick}
                  />
                ))}
              </div>
            </div>
            <div className={styles.gameCard}>
              <img
                className={styles.gameImg}
                src={game.background_image}
                alt={game.name}
              />
              <p className={styles.gameTitle}>{game.name}</p>
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
                <hr></hr>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.extraContentContainer}>
          <div className={styles.gameContentTop}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quibusdam commodi tenetur provident officia assumenda, distinctio
            voluptate, consequatur rem voluptatum hic? Vero officia, numquam
            possimus atque unde error sit tempora.
          </div>
          <div className={styles.gameContentBottom}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste velit
            enim sed consectetur explicabo optio, nemo doloremque sequi sint vel
            provident adipisci praesentium voluptates atque, eius commodi
            similique numquam dicta.
          </div>
          <div className={styles.gameContentSide}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            laboriosam excepturi officiis suscipit fugit ipsa enim beatae unde
            sint provident, facere exercitationem vero eaque consequatur dolorum
            aliquid tempora, sit ab!
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
