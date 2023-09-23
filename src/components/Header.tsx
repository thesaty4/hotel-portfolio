import { Box } from "@mui/system";
import React, { useState } from "react";

interface HeaderProps {
  title: string;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onLogin }) => {
  const menuList = [
    { id: "home", value: "Home" },
    { id: "menu", value: "Menu" },
    { id: "about", value: "About" },
    { id: "contact", value: "Contact" },
  ];
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <header className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={require("../assets/images/logo.png")} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Box
            sx={{ justifyContent: "flex-end" }}
            className="collapse navbar-collapse"
            id="navbars-rs-food"
          >
            <ul style={{ gap: "10px" }} className="navbar-nav ml-auto">
              {menuList.map((item) => (
                <li
                  onClick={() => setActiveMenu(item.value)}
                  className={`nav-item ${
                    item.value == activeMenu ? "active" : ""
                  }`}
                >
                  <a className="nav-link" href={`#${item.id}`}>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        </div>
      </nav>
    </header>
  );
};

export default Header;
