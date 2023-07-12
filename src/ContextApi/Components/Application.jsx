import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import ChildComponent from "./ChildComponent";
import Profile from "./Profile";
import { UserProvider } from "../context/UserContext";
const Application = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
      <hr />
      <UserProvider>
        <Profile />
      </UserProvider>
    </ThemeProvider>
  );
};

export default Application;
