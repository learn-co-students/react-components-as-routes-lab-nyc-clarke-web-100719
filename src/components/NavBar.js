import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  margin: '10px'
};

const NavBar = () => {
  return (
    <div className="navbar">

      <NavLink
        to="/"
        exact 
        style={link}
      >Home</NavLink>

      <NavLink
        to="/actors"
        exact
        style={link}
      >Actors</NavLink>

      <NavLink
        to="/movies"
        exact
        style={link}
      >Movies</NavLink>

      <NavLink 
        to="/directors"
        exact
        style={link}
      >Directors</NavLink>

    </div>
  );
};

export default NavBar;
