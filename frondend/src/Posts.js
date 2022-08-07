import axios from "axios";
import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import { languages } from "./Languages";

function Posts() {
  const [posts, setPosts] = useState([]);

  // correct
  // useEffect(() => {
  //   axios
  //     .get("/posts", { headers: { "Accept-Language": currentLanguageCode } })
  //     .then(response => {
  //       setPosts(response.data);
  //     });
  // }, [currentLanguageCode]);

  useEffect(() => {
    axios.get("/posts").then(response => {
      setPosts(response.data);
    });
  }, []);

  if (posts.length === 0) return <div>loading...</div>;

  return (
    <div>
      <h1>Posts</h1>

      {posts.map(post => {
        return (
          <div
            style={{
              padding: 20,
              border: "1px solid red",
              borderRadius: 10,
              marginTop: 5,
            }}
            key={post.id}
          >
            <h6>{post.id}</h6>
            <h6>{post.title}</h6>
            <p>{post.description}</p>
            <span>quantity :{post.quantity_left}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
