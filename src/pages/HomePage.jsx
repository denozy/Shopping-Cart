import GamesContainer from "../components/GamesContainer";

const HomePage = ({ loading, sortedGames }) => {
  return (
    <>
      <GamesContainer sortedGames={sortedGames} loading={loading} />
    </>
  );
};

export default HomePage;
