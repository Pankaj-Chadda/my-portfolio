import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <h1 className="title">Pankaj Chadda</h1>
      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <NavLink to="/" onClick={toggleMenu} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={toggleMenu} activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={toggleMenu} activeClassName="active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu} activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default NavBar;
