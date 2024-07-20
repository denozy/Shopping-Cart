import GamesContainer from "../components/GamesContainer";

const HomePage = ({
  getPrice,
  loading,
  sortedGames,
  outletHeader,
  signIn,
  addToWishList,
  addToCart,
  cart,
}) => {
  return (
    <>
      <GamesContainer
        sortedGames={sortedGames}
        loading={loading}
        outletHeader={outletHeader}
        getPrice={getPrice}
        signIn={signIn}
        addToWishList={addToWishList}
        addToCart={addToCart}
        cart={cart}
      />
    </>
  );
};

export default HomePage;
