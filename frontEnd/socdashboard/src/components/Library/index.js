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
                  setPosts(data);
                  console.log(data);
            }
            getAllTasks();
      }, []);

      return (
            <div className="LibraryContainer">
                  <SearchBar />
                  <button>Add to library</button>
                  <NewResourceForm />
                  <LibraryResult />
            </div>
      );
};

export default Library;
