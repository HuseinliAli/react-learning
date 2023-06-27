import React, { useState } from "react";

const UseStateComponent = () => {
  const [name, setName] = useState("ali");

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("huseyn")}>change name</button>
    </div>
  );
};

export default UseStateComponent;
