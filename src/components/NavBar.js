import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/actors" activeClassName="active">
        Actors
      </NavLink>
      <NavLink to="/directors" activeClassName="active">
        Directors
      </NavLink>
      <NavLink to="/movies" activeClassName="active">
        Movies
      </NavLink>
    </div>
  );
}

export default NavBar;
