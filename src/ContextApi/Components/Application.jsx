import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import ChildComponent from "./ChildComponent";
const Application = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
};

export default Application;
