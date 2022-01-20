import "./index.css";
import React, { useEffect, useState } from "react";

//https://schoolofcodelibrary.herokuapp.com/users/{id}

const LibraryResult = ({ title, week, day, link, id, setPosts }) => {
  async function removeItem() {
    let result = await fetch(
      `https://schoolofcodelibrary.herokuapp.com/users/${id}`,
      {
        method: "DELETE",
      }
    );
    result = await result.json();
    console.log(result);
  }

  //   useEffect(() => {
  //     // DELETE request using fetch with async/await
  //     async function removeItem() {
  //       await fetch(`https://schoolofcodelibrary.herokuapp.com/users/${id}`, {
  //         method: "DELETE",
  //       });
  //     }
  //     removeItem();
  //   }, []);

  return (
    <div className="libraryResultContainer">
      <a href={link}>{title}</a>
      <div className="week-day">
        <h3 className="week-text">Week: {week}</h3>
        <h3 className="day-text">Day: {day}</h3>
        <button onClick={(setPosts, removeItem)}>Remove</button>
      </div>
    </div>
  );
};

export default LibraryResult;

//Call api patch
//Call api delete ---> id

//Find ID
//Call api delete method with that id
