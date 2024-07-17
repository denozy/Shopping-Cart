import GamesContainer from "../components/GamesContainer";

const HomePage = ({ cart, setCart, loading, sortedGames }) => {
  return (
    <>
      <GamesContainer
        cart={cart}
        setCart={setCart}
        sortedGames={sortedGames}
        loading={loading}
      />
    </>
  );
};

export default HomePage;
