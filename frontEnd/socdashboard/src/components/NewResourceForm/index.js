import React from "react";

const NewResourceForm = () => {
  return (
    <div className="newResourceFormContainer">
      <form>
        <input type="number" placeholder="Week number?" />
        <input type="number" placeholder="Day number?" />
        <input type="text" placeholder="Topic Description" />
        <input type="url" placeholder="Link" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewResourceForm;
