const LibraryResult = ({ title, week, day, link }) => {
  return (
    <div className="libraryResultContainer">
      <h1>{title}</h1>
      <h3>
        Week: {week} / Day: {day}
      </h3>
      <p>
        <a href={link}></a>Resource
      </p>
    </div>
  );
};

export default LibraryResult;
