import React from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
const Nav = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
        <ul className="navbar-nav ">
          <li className="navbar-nav-item">
            <Link className="nav-link" to="/">
              <Home />
            </Link>
          </li>
          <li className="navbar-nav-item">
            <Link className="nav-link" to="/about">
              <About />
            </Link>
          </li>
          <li className="navbar-nav-item">
            <Link className="nav-link" to="/contact">
              <Contact />
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Nav;
