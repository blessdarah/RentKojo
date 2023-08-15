import { Button } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";

export const NavigationMenu: React.FC = () => {
  return (
    <ul className="navbar d-none d-lg-flex">
      <li className="navbar__item">
        <Link to={"/"} className="navItem__link" data-item="welcome">
          Home
        </Link>
      </li>
      <li className="navbar__item">
        <Link to={"/about"} className="navItem__link" data-item="about">
          About
        </Link>
      </li>
      <li className="navbar__item">
        <Link to={"/news"} className="navItem__link" data-item="news">
          Brows products
        </Link>
      </li>
      <li className="navbar__item">
        <Link to={"/contact"} className="navItem__link" data-item="contact">
          Contact
        </Link>
      </li>
      <li className="navbar__item p-2 rounded">
        <Link to={"/login"} data-item="login">
          Login
        </Link>
      </li>
    </ul>
  );
};
