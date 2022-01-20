import LibraryResult from "../LibraryResult";
import SearchBar from "../SearchBar";
import NewResourceForm from "../NewResourceForm";
import React, { useState, useEffect } from "react";
import "./index.css";

const Library = ({ user }) => {
  const [fetchPosts, setFetchPosts] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Lib");
    async function getAllTasks() {
      const response = await fetch(
        "https://schoolofcodelibrary.herokuapp.com/users/"
      );
      const data = await response.json();
      setPosts(data.payload);
      setFetchPosts(false);
      console.log(data.payload);
    }
    if (fetchPosts) {
      getAllTasks();
    }
  }, [fetchPosts]);
  return (
    <div className="LibraryContainer">
      <SearchBar />
      <div className="submit-results">
        {user === "admin" && <NewResourceForm setFetchPosts={setFetchPosts} />}
      </div>
      {posts.map((item) => {
        return (
          <LibraryResult
            setFetchPosts={setFetchPosts}
            key={item.id}
            title={item.topic}
            week={item.week}
            day={item.day}
            link={item.link}
            id={item.id}
            user={user}
          />
        );
      })}
    </div>
  );
};
export default Library;
