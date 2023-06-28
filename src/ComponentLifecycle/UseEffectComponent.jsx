import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("no name");

  useEffect(() => {
    console.log("name state is updated");
  }, [name]);

  useEffect(() => {
    console.log("number state is updated");
  }, [number]);

  function handleNumber() {
    setNumber(number + 1);
  }
  function handleName() {
    setName("ali");
  }
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={handleName}>click</button>
      <br />
      <br />
      <h3>{number}</h3>
      <button onClick={handleNumber}>click</button>
    </div>
  );
};

export default UseEffectComponent;
