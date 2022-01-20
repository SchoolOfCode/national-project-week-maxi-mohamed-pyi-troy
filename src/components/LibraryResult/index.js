import "./index.css";
import React from "react";
//https://schoolofcodelibrary.herokuapp.com/users/{id}
const LibraryResult = ({ title, week, day, link, id, setFetchPosts }) => {
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
                  <a href={link} target="_blank" rel="noreferrer">
                        {title}
                  </a>
                  <div className="week-day">
                        <h3 className="week-text">Week: {week}</h3>
                        <h3 className="day-text">Day: {day}</h3>
                        <button onClick={combo}>Remove</button>
                  </div>
            </div>
      );
};
export default LibraryResult;
//Call api patch
//Call api delete ---> id
//Find ID
//Call api delete method with that id
