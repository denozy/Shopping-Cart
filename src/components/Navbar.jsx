import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/navbar.module.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { TbShoppingCartX } from "react-icons/tb";

const Navbar = ({ toggleCart, cartVisibility, buttonRef }) => {
  const linkClass = ({ isActive }) =>
    isActive ? styles.isActive : styles.isNotActive;

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navDiv}>
          {/* <!-- Logo --> */}
          <div className={styles.navItem}>
            <NavLink className={styles.mainLink} to="/">
              <img
                className={styles.iconImage}
                src={logo}
                alt="React Logo Icon"
              />
              <span className={styles.titleLogo}>Games up</span>
            </NavLink>
          </div>
          <div className={`${styles.navItem} ${styles.searchContainer}`}>
            <form className={styles.headerForm}>
              <input
                className={styles.headerInput}
                role="searchbox"
                type="text"
                placeholder="Search games"
              />
            </form>
          </div>

          <div className={styles.linkContainer}>
            <div className={styles.link}>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </div>
            <div className={styles.link}>
              <NavLink to="/library" className={linkClass}>
                Library
              </NavLink>
            </div>
            <div className={`${styles.link} ${styles.cartIcon} `}>
              <button
                ref={buttonRef}
                onClick={toggleCart}
                className={styles.toggleCartButton}
              >
                <NavLink
                  to="/cart"
                  className={`${linkClass} ${styles.cartIcon}`}
                >
                  {cartVisibility ? (
                    <TbShoppingCartX />
                  ) : (
                    <TbShoppingCartPlus />
                  )}
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
