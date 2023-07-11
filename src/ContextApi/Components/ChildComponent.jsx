import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const ChildComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`bg-${theme} text-${theme === "light" ? "dark" : "light"}`}>
      AKSLKDLSDLKASLKD{" "}
      <button
        className={`btn btn-${theme === "light" ? "dark" : "light"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        change theme
      </button>
    </div>
  );
};

export default ChildComponent;
