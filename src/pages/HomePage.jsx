import GamesContainer from "../components/GamesContainer";

const HomePage = ({ games, loading }) => {
  return (
    <>
      <GamesContainer games={games} loading={loading} />
    </>
  );
};

export default HomePage;
