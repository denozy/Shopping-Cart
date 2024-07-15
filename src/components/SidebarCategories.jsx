import { NavLink } from "react-router-dom";
import styles from "../styles/sidebarCategories.module.css";

const SidebarCategories = () => {
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarListItem}>
          <NavLink to="/" className={styles.sectionHeader}>
            Home
          </NavLink>
        </li>
        <li className={styles.sidebarListItem}></li>
        <li className={styles.sidebarListItem}>
          <span className={styles.sidebarItem}></span>
        </li>
        <li className={styles.sidebarListItem}>stuff</li>
      </ul>
    </div>
  );
};

export default SidebarCategories;
