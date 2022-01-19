import LibraryResult from "../LibraryResult";
import SearchBar from "../SearchBar";
import NewResourceForm from "../NewResourceForm";

import React, { useState, useEffect } from "react";

const Library = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllTasks() {
      const response = await fetch("http://localhost:4000/users/");
      const data = await response.json();
      setPosts(data.payload);
    }
    getAllTasks();
  }, []);

  console.log(posts);

  return (
    <div className="LibraryContainer">
      <SearchBar />
      <button>Add to library</button>
      <NewResourceForm />
      {posts.map((item) => {
        return (
          <LibraryResult
            key={item.topic}
            title={item.topic}
            week={item.week}
            day={item.day}
            link={item.link}
          />
        );
      })}
    </div>
  );
};

export default Library;
