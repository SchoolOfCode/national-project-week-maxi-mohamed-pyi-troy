import LibraryResult from "../LibraryResult";
import SearchBar from "../SearchBar";
import NewResourceForm from "../NewResourceForm";

import React, { useState, useEffect } from "react";
import "./index.css";

const Library = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function onChange(e) {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  useEffect(() => {
    async function getAllTasks() {
      const response = await fetch(
        "https://schoolofcodelibrary.herokuapp.com/users/"
      );
      const data = await response.json();
      setPosts(data.payload);
    }
    getAllTasks();
  }, [posts]);
  return (
    <div className="LibraryContainer">
      <SearchBar onChange={onChange} />

      <div className="submit-results">
        {user === "admin" && <NewResourceForm setPosts={setPosts} />}
      </div>
      {posts
        .filter((item) => {
          if (searchTerm === "") {
            return item;
          } else if (
            item.topic.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => {
          return (
            <LibraryResult
              setPosts={setPosts}
              id={item.id}
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
