import React from "react";

const Header = ({ name }) => {
  console.log("header is rendered");
  return (
    <div className="text-center">
      Header - {JSON.stringify(name)}
      <br />
      <hr />
    </div>
  );
};

export default React.memo(Header);
