import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const ChildComponent = () => {
  const data = useContext(ThemeContext);
  return <button className={`btn btn-${data}`}>Button</button>;
};

export default ChildComponent;
