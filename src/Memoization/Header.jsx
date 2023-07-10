import React from "react";

const Header = () => {
  console.log("header is rendered");
  return <div>Header</div>;
};

export default React.memo(Header);
