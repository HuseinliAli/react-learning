import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div className="spinner-border text-dark " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.name + " " + user.username}
              </Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Users;
