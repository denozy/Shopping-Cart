import { NavLink } from "react-router-dom";
import styles from "../styles/sidebarCategories.module.css";

import androidIcon from "../assets/android.png";
import gamepad from "../assets/gamepad.png";
import ios from "../assets/ios.png";
import joystick from "../assets/joystick.png";
import keyboard from "../assets/keyboard.png";
import newReleases from "../assets/new_releases.png";
import school from "../assets/school.png";
import controller from "../assets/stadia_controller.png";
import star from "../assets/star.png";
import stars from "../assets/stars.png";
import thumbUp from "../assets/thumb_up.png";
import trending from "../assets/trending_up.png";
import trophy from "../assets/trophy.png";
import calendar from "../assets/calendar.png";
import explosion from "../assets/explosion.png";
import flag from "../assets/flag.png";
import puzzle from "../assets/puzzlepiece.png";
import sports from "../assets/sports.png";

import playstation from "../assets/playstation.png";
import xbox from "../assets/xbox.png";
import nintendo from "../assets/nintendo-switch.png";
import pc from "../assets/pc.png";

const SidebarCategories = ({ signIn }) => {
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebarList}>
        <div className={styles.sidebarNav}>
          <li className={styles.sectionHeader}>
            <NavLink to="/" className={styles.sectionHeader}>
              Home
            </NavLink>
          </li>
          <li className={styles.sectionHeader}>
            <NavLink
              className={styles.sectionHeader}
              to={signIn ? "wishlist" : "account"}
            >
              {signIn ? "Wishlist" : "Sign In"}
            </NavLink>
          </li>
        </div>

        <li className={styles.sectionHeader}>Sort by</li>
        <hr />
        <div className={styles.sortingItems}>
          <button className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={star}></img>
            <li className={styles.sidebarListItem}>Highest Rated</li>
          </button>

          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={calendar}></img>
            <li className={styles.sidebarListItem}>Release Date</li>
          </div>

          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={trophy}></img>
            <li className={styles.sidebarListItem}>User Reviews</li>
          </div>
        </div>
        <li className={styles.sectionHeader}>Categories</li>
        <hr />
        <li className={styles.sectionSubHeader}>Platforms</li>
        <div className={styles.sortingItems}>
          <div className={styles.listItemContainer}>
            <img
              className={styles.linkIcon}
              src={nintendo}
              style={{ filter: "invert(1)", height: "16px" }}
            ></img>
            <li className={styles.sidebarListItem}>Nintendo</li>
          </div>
          <div className={styles.listItemContainer}>
            <img
              className={styles.linkIcon}
              style={{ filter: "invert(1)", height: "18px" }}
              src={playstation}
            ></img>
            <li className={styles.sidebarListItem}>PlayStation</li>
          </div>
          <div className={styles.listItemContainer}>
            <img
              className={styles.linkIcon}
              style={{ filter: "invert(1)", height: "15px" }}
              src={xbox}
            ></img>
            <li className={styles.sidebarListItem}>Xbox</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={keyboard}></img>
            <li className={styles.sidebarListItem}>PC</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={ios}></img>
            <li className={styles.sidebarListItem}>iOS</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={androidIcon}></img>
            <li className={styles.sidebarListItem}>Android</li>
          </div>
        </div>
        <li className={styles.sectionSubHeader}>Genre</li>
        <div className={styles.sortingItems}>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={thumbUp}></img>
            <li className={styles.sidebarListItem}>Free to Play</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={explosion}></img>
            <li className={styles.sidebarListItem}>Action</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={joystick}></img>
            <li className={styles.sidebarListItem}>RPG</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={gamepad}></img>
            <li className={styles.sidebarListItem}>Adventure</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={controller}></img>
            <li className={styles.sidebarListItem}>FPS</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={puzzle}></img>
            <li className={styles.sidebarListItem}>Puzzle</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={flag}></img>
            <li className={styles.sidebarListItem}>Racing</li>
          </div>
          <div className={styles.listItemContainer}>
            <img className={styles.linkIcon} src={sports}></img>
            <li className={styles.sidebarListItem}>Sports</li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default SidebarCategories;
