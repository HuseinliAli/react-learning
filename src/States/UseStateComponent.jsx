import React, { useState } from "react";

const UseStateComponent = () => {
  const [name, setName] = useState("ali");
  const [friends, setFriends] = useState(["riko", "amuko", "makolo"]);
  const [address, setAddress] = useState({ country: "aze", city: "baku" });
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
      <br />
      <br />
      <br />
      <p>country: {address.country}</p>
      <p>city: {address.city}</p>
      <button
        onClick={() => setAddress({ country: address.country, city: "gence" })}
      >
        change location 1
      </button>
      <button onClick={() => setAddress({ ...address, city: "lenkeran" })}>
        change location 2
      </button>
    </div>
  );
};

export default UseStateComponent;
