import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/navbar.module.css";
import reactLogo from "../assets/react.svg";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={reactLogo} alt="Logo" className={classes.logoImage} />
      </div>
      <ul className={classes.navLinks}>
        <li>
          <Link to="/home" className={classes.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className={classes.navLink}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
