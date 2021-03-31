import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <ul className="list">
      <li className="list__item">
        <NavLink
          exact
          className="navLink"
          activeClassName="navLink--active"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="list__item">
        <NavLink
          className="navLink"
          activeClassName="navLink--active"
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
export default AppBar;
