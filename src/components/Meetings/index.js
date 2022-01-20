import MeetingsData from "../MeetingsData";
import { useState } from "react";

const Meetings = () => {
  const [meeting, setMeeting] = useState([
    {
      bootcamper: "Max",
      topic: "Javascript",
      dataTime: "2021-12-16T22:20",
      link: "https://www.google.com/",
    },
    {
      bootcamper: "Max",
      topic: "Javascript",
      dataTime: "2021-12-16T22:20",
      link: "https://www.google.com/",
    },
    {
      bootcamper: "Max",
      topic: "Javascript",
      dataTime: "2021-12-16T22:20",
      link: "https://www.google.com/",
    },
    {
      bootcamper: "Max",
      topic: "Javascript",
      dataTime: "2021-12-16T22:20",
      link: "https://www.google.com/",
    },
  ]);
  const [bootcamper, setBootcamper] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [topic, setTopic] = useState("");
  const [link, setLink] = useState("");

  function getBootcamper(e) {
    setBootcamper(e.target.value);
  }
  function getTopic(e) {
    setTopic(e.target.value);
  }
  function getDateTime(e) {
    setDateTime(e.target.value);
  }
  function getLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMeeting((prevState) => {
      return [...prevState, { bootcamper, dateTime, link, topic }];
    });
    e.target.reset();
  }
  console.log(meeting);

  return (
    <div className="meeting-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bootcamper"
          placeholder="Bootcamper"
          onChange={getBootcamper}
        />
        <input
          type="datetime-local"
          name="dateTime"
          placeholder="Date & Time"
          onChange={getDateTime}
        />
        <input
          type="text"
          name="name"
          placeholder="Topic"
          onChange={getTopic}
        />
        <input
          type="url"
          name="link"
          placeholder="Zoom Link"
          onChange={getLink}
        />
        <button className="submit-button">Submit</button>
      </form>
      <div className="test">
        {meeting.map((meet, index) => {
          return (
            <div>
              <MeetingsData
                key={index}
                dateTime={meet.dateTime}
                bootcamper={meet.bootcamper}
                topic={meet.topic}
                link={meet.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meetings;
