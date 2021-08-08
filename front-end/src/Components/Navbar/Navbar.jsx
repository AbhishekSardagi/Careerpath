import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbarFlexClass}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/searchpage">Search Page</Link> */}
        <Link to="/stageone">Stage One</Link>
      </div>
    </div>
  );
};

export { Navbar };
