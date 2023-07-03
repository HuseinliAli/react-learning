import React from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Users from "./Users";
import User from "./User";
import "./nav.module.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
const Nav = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
        <ul className="navbar-nav ">
          <li className="navbar-nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="navbar-nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/users"
            >
              Users
            </NavLink>
          </li>
          <li className="navbar-nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Nav;
