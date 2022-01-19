import LibraryResult from "../LibraryResult";
import SearchBar from "../SearchBar";
import NewResourceForm from "../NewResourceForm";

import React, { useState, useEffect } from "react";

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
      }, []);

      console.log(posts);

      return (
            <div className="LibraryContainer">
                  <SearchBar />

                  {user === "Admin" && <NewResourceForm />}
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
