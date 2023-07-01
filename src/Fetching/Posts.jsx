import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  });
  return (
    <div className="d-flex justify-content-center container mt-4 mb-4">
      <div className="row">
        <div className="col">
          <h2 className="text-start">Posts</h2>
          {isLoading && <p>loading ...</p>}
          <ul className="list-group">
            {posts.map((post) => (
              <li
                key={post.id}
                className="list-group-item list-group-item-action"
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;
