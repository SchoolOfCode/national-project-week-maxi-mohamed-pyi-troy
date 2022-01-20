import React from "react";

const MeetingsData = ({ dateTime, bootcamper, topic, link }) => {
  return (
    <div className="libraryResultContainer">
      <h3>Date and Time : {dateTime}</h3>
      <h3>Bootcamper : {bootcamper}</h3>
      <h3>Topic : {topic}</h3>
      <h4>
        Zoom Link :{" "}
        <a href={link} target="_blank" rel="noreferrer">
          {link}{" "}
        </a>
      </h4>
    </div>
  );
};

export default MeetingsData;
