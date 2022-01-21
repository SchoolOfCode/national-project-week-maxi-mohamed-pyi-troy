import React from "react";
import "./index.css";

const SearchBar = ({ onChange }) => {
  return (
    <div className="searchBarContainer">
      <input
        type="text"
        placeholder="enter your search here"
        onChange={onChange}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
