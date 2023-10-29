import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import hotel from "./constant/hotel-details";
import Main from "./components/Main";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import "./assets/css/style.css";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import About from "./components/About";
import ItemMenu from "./components/ItemMenu";
import Gallery from "./components/Gallery";
import {
  aboutContent,
  galleryContent,
  items,
} from "./constant/hotel-feature-data.const";
import { styles } from "./assets/style-object/common-style";
import ContactUS from "./components/ContactUS";
import Protected from "./components/auth/Protected";
import useLogin from "./custom-hooks/useLogin";
const App: React.FC = () => {
  const handleLogin = () => {
    // Implement your login logic here
    alert("Login clicked!");
  };

  const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("http://localhost:5000")
  //     .then((res) => res.json())
  //     .then((res) => setData(res.message));
  // }, []);
  // console.log("*********", data);
  const info = useLogin();
  const isLogged = !!info.info;
  return (
    <div className="main-wrapper">
      <Router>
        <Header title={hotel.name.toUpperCase()} onLogin={handleLogin} />
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route
            path="/user-profile"
            element={isLogged ? <UserProfile /> : <Navigate to="/" replace />}
          ></Route>

          <Route
            path="/sign-in"
            element={isLogged ? <Navigate to="/" replace /> : <SignIn />}
          ></Route>
          <Route
            path="/sign-up"
            element={isLogged ? <Navigate to="/" replace /> : <SignUp />}
          ></Route>

          <Route
            path="/about"
            element={<About info={aboutContent} sx={styles.about} />}
          ></Route>
          <Route
            path="/menu"
            element={<ItemMenu items={items} sx={styles.itemMenu} />}
          ></Route>
          <Route
            path="/gallery"
            element={<Gallery items={galleryContent} />}
          ></Route>
          <Route path="/contact" element={<ContactUS />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer
          socialLinks={hotel.socialLinks}
          hotelName={hotel.name}
          year={hotel.copyright.year}
        />
      </Router>
    </div>
  );
};

export default App;
