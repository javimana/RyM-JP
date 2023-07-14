import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";

const Nav = (props) => {
  return (
    <div className={style.NavMain}>
      <SearchBar
        onSearch={props.onSearch}
        onSearchRandom={props.onSearchRandom}
        logout={props.logout}
      />

      <div className={style.buttonContainer}>
        <button onClick={props.handleClearAll} className={style.handleClearAll}>Clear All</button>

        <Link to={ROUTES.ABOUT}>
          <button className={style.aboutButton}>About</button>
        </Link>

        <NavLink to={ROUTES.HOME}>
          <button className={style.homeButton}>Home</button>
        </NavLink>

        <NavLink to={ROUTES.FAVORITES}>
          <button className={style.favoritesButton}>Favorites</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
