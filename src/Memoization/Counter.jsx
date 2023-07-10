import React, { useState } from "react";
import Header from "./Header";
const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <Header />
      {number}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Artir
      </button>
    </div>
  );
};

export default Counter;
