import React from "react";
import styles from "../styles/wishlist.module.css";
import Dropdown from "../components/Dropdown";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = ({ wishlist }) => {
  return (
    <div className={styles.wishListPageContainer}>
      <header>
        <h1>Your Wishlist</h1>
        <nav>
          <input type="text" />
          <Dropdown />
        </nav>
      </header>

      <section>
        {wishlist.length > 0 ? (
          wishlist.map((item) => <WishlistItem key={item.id} game={item} />)
        ) : (
          <p>No items in wishlist</p>
        )}
      </section>
    </div>
  );
};

export default WishlistPage;
