import { Box } from "@mui/system";
import React, { useState } from "react";

interface HeaderProps {
  title: string;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onLogin }) => {
  const [isCollapsed, setCollapsed] = useState(false);
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
            onClick={() => setCollapsed(!isCollapsed)}
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Box
            sx={{
              justifyContent: "flex-end",
              ...{ display: isCollapsed ? "block" : "none" },
              padding: "20px 10px 20px",
              "box-shadow": "0px 0px 3px #b0a5a5",
            }}
            className="navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul style={{ gap: "10px" }} className="navbar-nav ml-auto">
              {menuList.map((item) => (
                <li
                  onClick={() => setActiveMenu(item.value)}
                  className={`nav-item ${
                    item.value == activeMenu ? "active" : ""
                  }`}
                  key={item.id}
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
