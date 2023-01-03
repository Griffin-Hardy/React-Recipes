import "./Header.css"
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <NavLink to='/'>
          <button className="nav-btn">Home</button>
        </NavLink>
        <NavLink to='/newRecipe'>
          <button className="nav-btn">Add Recipe</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
