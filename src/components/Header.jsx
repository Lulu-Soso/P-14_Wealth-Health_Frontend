import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Logo />
        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/employees/create">Create Employee</NavLink>
          <NavLink to="/employees/list">Employees List</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;