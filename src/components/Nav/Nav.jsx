import { NavLink as Link } from "react-router-dom";

import s from "./Style.module.scss"

export const Nav = () => {
  return (
    <nav className={s.nav_main}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
