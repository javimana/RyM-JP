import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";

const Nav = (props)=>{
    return(
        <div className={style.NavMain}>
            <SearchBar onSearch = {props.onSearch}/>
            
            <Link to={ROUTES.ABOUT}>
                <button>About</button>
            </Link>

            <NavLink to={ROUTES.HOME}>
                <button>Home</button>
            </NavLink>            
    
        </div>
    )
}

export default Nav;

