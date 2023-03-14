import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a href="https://github.com/FelipeFardo" target='_blank' rel="noreferrer">GitHub de Felipe Fardo</a>
      <ul className={styles.links_list}>
      <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rgbtohsv"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            RGB para HSV
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hsvtorgb"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            HSV para RGB
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rgbtocmyk"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            RGB para CMYK
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cmyktorgb"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            CMYK para RGB
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rgbtogray"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            RGB para Escala de Cinza
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
