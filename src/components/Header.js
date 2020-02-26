import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h3> Wyze </h3>
      <ul className="head-links">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/random">
          <li>Random Advice</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </header>
  );
}
