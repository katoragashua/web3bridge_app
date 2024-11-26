import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import web3bridge from "/src/assets/web3bridge.svg";

const links = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "dashboard",
    link: "/dashboard",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between container pb-8">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={web3bridge} alt="Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="flex justify-between items-center gap-8">
          {links.map((link) => (
            <li key={link.id} className="">
              <Link to={link.link} className="links">
                <span className="sub-title  font-semibold">{link.title.toLocaleUpperCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
