import React, { useState } from "react";
import "./index.css"

const NewResourceForm = () => {
  const [newPost, setNewPost] = useState({});
  const [week, setWeek] = useState("");
  const [day, setDay] = useState("");
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

  console.log(week);

  async function onSubmitForm(event) {
    event.preventDefault();
    const body = { newPost };
    const response = await fetch("http://localhost:4000/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
  }
  return (
    <div className="submit-form">
      <form>
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
