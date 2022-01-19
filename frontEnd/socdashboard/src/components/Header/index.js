import React from "react";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ user, email }) => {
  const [dropdown, setDropdown] = useState(false);

  let navigate = useNavigate();

  function handleDropdown() {
    setDropdown((prevState) => !prevState);
  }

  return (
    <div className="headerContainer">
      <img
        src="https://media-public.canva.com/xni2M/MADd2Bxni2M/2/t.png"
        alt="bell"
      ></img>
      <h2 className="avatar">{email[0].toUpperCase()}</h2>

      <h2 onClick={handleDropdown}>
        Welcome {user} <span>v</span>
      </h2>
      {dropdown && <button onClick={() => navigate("/")}>Logout</button>}
    </div>
  );
};

export default Header;
