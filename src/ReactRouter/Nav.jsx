import React from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Users from "./Users";
import User from "./User";
import PageNotFound from "./PageNotFound";
import "./nav.module.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
const Nav = () => {
  const { t, i18n } = useTranslation();
  const clickHandle = async (language) => {
    await i18n.changeLanguage(language);
  };
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
              {t("home.nav")}
            </NavLink>
          </li>
          <li className="navbar-nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/about"
            >
              {t("about")}
            </NavLink>
          </li>
          <li className="navbar-nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/users"
            >
              {t("users")}
            </NavLink>
          </li>
          <li className="navbar-nav-item">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/contact"
            >
              {t("contact")}
            </NavLink>
          </li>
          <button onClick={() => clickHandle("aze")}>Aze</button>
          <button onClick={() => clickHandle("en")}>En</button>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Home nav={t("home.nav")} header={t("home.header")} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/users/" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Nav;
