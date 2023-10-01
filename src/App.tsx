import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import hotel from "./constant/hotel-details";
import Main from "./components/Main";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./assets/css/style.css";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
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
  return (
    <div className="main-wrapper">
      <Router>
        <Header title={hotel.name.toUpperCase()} onLogin={handleLogin} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
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
