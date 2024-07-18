import GamesContainer from "../components/GamesContainer";

const HomePage = ({
  getPrice,
  cart,
  setCart,
  loading,
  sortedGames,
  outletHeader,
  setWishlist,
  signIn,
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
        setWishlist={setWishlist}
        signIn={signIn}
      />
    </>
  );
};

export default HomePage;
