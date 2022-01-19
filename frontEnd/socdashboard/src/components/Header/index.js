import React from "react";
import "./index.css";
import { useState } from "react";

const Header = ({ user }) => {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown((prevState) => !prevState);
  }

  return (
    <div className="headerContainer">
      <img
        src="https://media-public.canva.com/xni2M/MADd2Bxni2M/2/t.png"
        alt="bell"
      ></img>
      <h2 className="avatar">T</h2>

      <h2 onClick={handleDropdown}>
        Welcome {user} <span>v</span>
      </h2>
      {dropdown && (
        <button onClick={() => window.location.reload(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
