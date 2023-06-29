import React from "react";
import "./header.css";
import { GiGalaxy } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="wrapper-header">
      <div className="wrapper-logo">
        <GiGalaxy size={24} color="black" />
        Midle Exam React
      </div>
      <nav className="wrapper-nav">
        <ul className="list-nav">
          <li className="nav-item">
            <NavLink to={"/"}>
              <MdHome size={24} color="black" />
              Beranda
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/tentang"}>
              <MdInfo size={24} color="black" />
              Tentang
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
