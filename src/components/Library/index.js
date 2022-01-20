import LibraryResult from "../LibraryResult";
import SearchBar from "../SearchBar";
import NewResourceForm from "../NewResourceForm";

import React, { useState, useEffect } from "react";
import "./index.css";

const Library = ({ user }) => {
      const [posts, setPosts] = useState([]);

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

      console.log(user);

      return (
            <div className="LibraryContainer">
                  <SearchBar />

                  <div className="submit-results">
                        {user === "admin" && (
                              <NewResourceForm setPosts={setPosts} />
                        )}
                  </div>
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
