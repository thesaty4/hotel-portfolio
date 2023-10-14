import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MenuListComposition, {
  MenuListType,
} from "../shared/component/MenuListComposition";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  onLogin: () => void;
}

export let profileMenu: MenuListType = {
  itemList: [
    {
      item: "Login",
      routeLink: "/sign-in",
    },
    {
      item: "Sign Up",
      routeLink: "/sign-up",
    },
    {
      item: "My Profile",
      routeLink: "/user-profile",
    },
    {
      item: "Log out",
      routeLink: "/logout",
    },
  ],
};

const Header: React.FC<HeaderProps> = ({ title, onLogin }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const menuList = [
    { id: "home", value: "Home", routeLink: "/" },
    { id: "about", value: "About", routeLink: "/about" },
    { id: "menu", value: "Menu", routeLink: "/menu" },
    { id: "contact", value: "Contact", routeLink: "/contact" },
  ];
  const [activeMenu, setActiveMenu] = useState("Home");
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  }, [activeMenu]);

  // Ḥandle Login
  const isLoggedIn = false;
  profileMenu.itemList = profileMenu.itemList.filter((item) => {
    const loggedList: string[] = !isLoggedIn
      ? ["login", "signup"]
      : ["myprofile", "logout"];
    return loggedList.includes(item.item.split(" ").join("").toLowerCase());
  });
  return (
    <header className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={require("../assets/images/logo.png")} alt="" />
          </Link>
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
            <ul
              style={{ gap: "10px", cursor: "pointer" }}
              className="navbar-nav ml-auto"
            >
              {menuList.map((item) => (
                <li
                  onClick={() => setActiveMenu(item.value)}
                  onClickCapture={() =>
                    item?.routeLink && navigate(item?.routeLink)
                  }
                  className={`nav-item ${
                    item.value == activeMenu ? "active" : ""
                  }`}
                  key={item.id}
                >
                  <span className="nav-link">{item.value}</span>
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

function scrollToTop() {
  window.scrollTo(0, 0);
}
