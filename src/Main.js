import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import ToHome from "./pages/toHome"
import { Route, Routes } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> */}
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/toHome" element={<ToHome />} />

      </Routes>
    </div>
  );
};

export default Main;
