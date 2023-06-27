import React, { useState } from "react";

const UseStateComponent = () => {
  const [name, setName] = useState("ali");
  const [friends, setFriends] = useState(["riko", "amuko", "makolo"]);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("huseyn")}>change name</button>
      <br />
      <br />
      <br />
      <h2>{name}'s Friends</h2>
      {friends.map((friend, index) => (
        <p key={index}>{friend}</p>
      ))}
      <button onClick={() => setFriends([...friends, "nikolo"])}>
        add friend
      </button>
    </div>
  );
};

export default UseStateComponent;
