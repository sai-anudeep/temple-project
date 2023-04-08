import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="NavigateLinks">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
