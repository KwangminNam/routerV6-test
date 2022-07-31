import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="navList">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/routerproptest">router prop test</Link>
      </li>
      <li>
        <Link to="/routerpropresult">router prop result</Link>
      </li>
      <li>
        <Link to="/student">student</Link>
      </li>
    </ul>
  );
};

export default Nav;
