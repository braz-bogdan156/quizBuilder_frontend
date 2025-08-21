import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/quizzes" className={styles.logo}>Quiz Builder</Link>
          <nav className={styles.nav}>
            <NavLink to="/quizzes" className={({isActive}) => isActive ? styles.active : styles.link}>
              Quizzes
            </NavLink>
            <NavLink to="/create" className={({isActive}) => isActive ? styles.active : styles.link}>
              Create
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}