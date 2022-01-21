import React from "react";
import "./index.css";
import { useState } from "react";

const Header = ({ user, email, logOut }) => {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown((prevState) => !prevState);
  }

  return (
    <div className="headerContainer">
      {/* <img
        className="bell"
        src="https://media-public.canva.com/xni2M/MADd2Bxni2M/2/t.png"
        alt="bell"
      ></img> */}
      <h2 className="avatar">{email[0].toUpperCase()}</h2>

      <h2 className="welcome-message" onClick={handleDropdown}>
        Welcome {user} <span>v</span>
      </h2>
      {dropdown && <button onClick={() => logOut()}>Logout</button>}
    </div>
  );
};

export default Header;
