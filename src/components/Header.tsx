import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuListComposition, {
  MenuListType,
} from "../shared/component/MenuListComposition";

interface HeaderProps {
  title: string;
  onLogin: () => void;
}

export const profileMenu: MenuListType = {
  itemList: [
    {
      item: "My Profile",
      action() {
        console.log("Go To My profile..");
      },
    },
    {
      item: "Log out",
      action() {
        console.log("Clicked in logout..");
      },
    },
  ],
};

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
              <li>
                <MenuListComposition itemList={profileMenu.itemList} />
              </li>
            </ul>
          </Box>
        </div>
      </nav>
    </header>
  );
};

export default Header;
