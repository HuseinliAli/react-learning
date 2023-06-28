import { useState, useEffect } from "react";

const ComponentUnmount = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("number state is updated");

    const interval = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);

  function handleNumber() {
    setNumber(number + 1);
  }

  return (
    <div>
      <br />
      <h3>{number}</h3>
      <button onClick={handleNumber}>click</button>
    </div>
  );
};

export default ComponentUnmount;
