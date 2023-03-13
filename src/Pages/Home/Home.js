import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
;
  return (
    <div className={styles.home}>
      <h1>Bem vindo ao Conversor de Espaço de Cores</h1>
      <h2>Escolha uma opção a baixo para realizar a conversão</h2>
      <nav className={styles.navbar}>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/rbgtohsv"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            RBG para HSV
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
            to="/rbgtogray"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            RGB para Escala de Cinza
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Home;
