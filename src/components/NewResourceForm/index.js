import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
const NewResourceForm = ({ setFetchPosts }) => {
  const [week, setWeek] = useState(0);
  const [day, setDay] = useState(0);
  const [topic, setTopic] = useState("");
  const [link, setLink] = useState("");
  function getWeek(week) {
    setWeek(week);
  }
  function getTopic(topic) {
    setTopic(topic);
  }
  function getDay(day) {
    setDay(day);
  }
  function getLink(link) {
    setLink(link);
  }
  async function onSubmitForm(event) {
    event.preventDefault();
    const body = { week: week, link: link, topic: topic, day: day };
    const response = await fetch(
      "https://schoolofcodelibrary.herokuapp.com/users/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    event.target.reset();
    setFetchPosts(true);
    return data;
  }
  return (
    <div className="submit-form">
      <form onSubmit={(e) => onSubmitForm(e)}>
        <input
          type="number"
          placeholder="Week number?"
          onChange={(event) => getWeek(event.target.value)}
        />
        <input
          type="number"
          placeholder="Day number?"
          onChange={(event) => getDay(event.target.value)}
        />
        <input
          type="text"
          placeholder="Topic Description"
          onChange={(event) => getTopic(event.target.value)}
        />
        <input
          type="url"
          placeholder="Link"
          onChange={(event) => getLink(event.target.value)}
        />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};
export default NewResourceForm;
