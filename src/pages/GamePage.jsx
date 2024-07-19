import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GamePage = ({ gamesData, apiKey }) => {
  const { slug } = useParams();
  const [game, setGame] = useState(null); //data from slug api call
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState({}); //og data sorted from og call, has screenshots

  useEffect(() => {
    if (!game) return;
    const gamesToFilter = gamesData.filter((data) => data.id === game.id);
    const gameFiltered = gamesToFilter.pop();
    setGameData(gameFiltered);
    console.log(gameData);
  }, [game]);

  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);
      const gameUrl = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;
      try {
        const res = await fetch(gameUrl);
        const data = await res.json();
        setGame(data);
        console.log(data);
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

  if (loading) return <p>Loading...</p>;
  if (!game) return <p>gameData.name</p>;

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description_raw}</p>
      <img src={game.background_image} alt={game.name} />
      {/* Other game details */}
    </div>
  );
};

export default GamePage;
