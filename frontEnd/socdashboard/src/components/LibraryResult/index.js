import "./index.css";

const LibraryResult = ({ title, week, day, link }) => {
  return (
    <div className="libraryResultContainer">
      <a href={link}>{title}</a>
      <div className="week-day">
        <h3 className="week-text">Week: {week}</h3>
        <h3 className="day-text">Day: {day}</h3>
      </div>
    </div>
  );
};

export default LibraryResult;
