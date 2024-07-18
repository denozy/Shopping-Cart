import GamesContainer from "../components/GamesContainer";

const HomePage = ({
  getPrice,
  cart,
  setCart,
  loading,
  sortedGames,
  outletHeader,
}) => {
  return (
    <>
      <GamesContainer
        cart={cart}
        setCart={setCart}
        sortedGames={sortedGames}
        loading={loading}
        outletHeader={outletHeader}
        getPrice={getPrice}
      />
    </>
  );
};

export default HomePage;
