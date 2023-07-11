import React, { useMemo, useState } from "react";
import Header from "./Header";
const Counter = () => {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return [{ name: "Ali" }, number];
  }, [number]);
  return (
    <div className="text-center">
      <Header name={data} />

      {number}
      <br />
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
