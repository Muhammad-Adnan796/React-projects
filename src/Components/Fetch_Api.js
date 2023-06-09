import React, { useEffect, useState } from "react";

function Fetch_Api() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setPosts(result);
      });
  });
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <>
              <li>{post.userId}</li>
              <li>{post.id}</li>
              <li>{post.title}</li>
              <li>{post.body}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export { Fetch_Api };
