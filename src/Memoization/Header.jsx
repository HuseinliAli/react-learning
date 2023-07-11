import React from "react";

const Header = ({ name, increment }) => {
  console.log("header is rendered");
  return (
    <div className="text-center">
      Header - {JSON.stringify(name)}
      <br />
      <button onClick={increment}>Artir</button>
      <hr />
    </div>
  );
};

export default React.memo(Header);
