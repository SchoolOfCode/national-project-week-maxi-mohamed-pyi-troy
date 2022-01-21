import "./index.css";
import React from "react";
//https://schoolofcodelibrary.herokuapp.com/users/{id}
const LibraryResult = ({ title, week, day, link, id, setFetchPosts, user }) => {
  async function removeItem() {
    console.log("Remove item");
    let result = await fetch(
      `https://schoolofcodelibrary.herokuapp.com/users/${id}`,
      {
        method: "DELETE",
      }
    );
    result = await result.json();
    console.log(result);
    setFetchPosts(true);
  }
  function combo() {
    removeItem();
  }

  console.log("user-", user);

  return (
    <div className="libraryResultContainer">
      <a href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
      <div className="week-day">
        <h3 className="week-text">Week: {week}</h3>
        <h3 className="day-text">Day: {day}</h3>
        {user === "admin" && <button onClick={combo}>Remove</button>}
      </div>
    </div>
  );
};
export default LibraryResult;
