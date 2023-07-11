import React, { useCallback, useMemo, useState } from "react";
import Header from "./Header";
const Counter = () => {
  const [number, setNumber] = useState(0);
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);
  // const data = useMemo(() => {
  //   return [{ name: "Ali" }, number];
  // }, [number]);
  return (
    <div className="text-center">
      <Header increment={increment} />

      {number}
      <br />
    </div>
  );
};

export default Counter;
