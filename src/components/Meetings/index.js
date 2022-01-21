import MeetingsData from "../MeetingsData";
import { useState, useEffect } from "react";
import "./meetings.css";

const Meetings = () => {
  const [meeting, setMeeting] = useState([]);

  const [fetchMeetings, setFetchMeetings] = useState(true);
  const [bootcamper, setBootcamper] = useState("");
  const [datetime, setDateTime] = useState("");
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

  //POST A NEW MEETING
  async function handleSubmit(e) {
    // console.log(datetime);
    e.preventDefault();
    const body = {
      datetime: datetime,
      name: bootcamper,
      link: link,
      topic: topic,
    };
    const response = await fetch("https://backendproj.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    e.target.reset();
    setFetchMeetings(true);
    return data;
  }

  // GET ALL MEETINGS
  useEffect(() => {
    console.log("Meeting");
    async function getAllMeetings() {
      const response = await fetch("https://backendproj.herokuapp.com/users");
      const data = await response.json();
      setMeeting(data.payload);
      setFetchMeetings(false);
      console.log(data.payload);
    }
    if (fetchMeetings) {
      getAllMeetings();
    }
  }, [fetchMeetings]);

  console.log(meeting);

  return (
    <div>
      <div>
        <h2 className="meeting-title">Meetings</h2>
      </div>
      <form onSubmit={handleSubmit} className="meeting-form-container">
        <input
          className="meeting-form-input-bootcamper"
          type="text"
          name="bootcamper"
          placeholder="Bootcamper"
          onChange={getBootcamper}
        />
        <input
        className="meeting-form-input"
          type="datetime-local"
          name="datetime"
          placeholder="Date & Time"
          onChange={getDateTime}
        />
        <input
          className="meeting-form-input-topic"
          type="text"
          name="name"
          placeholder="Topic"
          onChange={getTopic}
        />
        <input
          className="meeting-form-input-zoom"
          type="url"
          name="link"
          placeholder="Zoom Link"
          onChange={getLink}
        />
        <button className="submit-button">Submit</button>
      </form>
      <div className="test">
        {meeting.map((meet) => {
          return (
            <div>
              <MeetingsData
                key={meet.id}
                datetime={meet.datetime}
                bootcamper={meet.name}
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

// setMeeting((prevState) => {
//   return [...prevState, { bootcamper, dateTime, link, topic }];
// });
// {
//   bootcamper: "Max",
//   topic: "Javascript",
//   dataTime: "2022-01-23T22:40",
//   link: "https://www.google.com/",
// },
// {
//   bootcamper: "Max",
//   topic: "Javascript",
//   dataTime: "2021-12-16T22:20",
//   link: "https://www.google.com/",
// },
// {
//   bootcamper: "Max",
//   topic: "Javascript",
//   dataTime: "2021-12-16T22:20",
//   link: "https://www.google.com/",
// },
// {
//   bootcamper: "Max",
//   topic: "Javascript",
//   dataTime: "2021-12-16T22:20",
//   link: "https://www.google.com/",
// },
