import React from "react";
import "./index.css";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <input type="text" placeholder="enter your search here" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
