import React from "react";
import ThemeContext from "../context/ThemeContext";
import ChildComponent from "./ChildComponent";
const Application = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

export default Application;
