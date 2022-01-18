import React from "react";
import "./index.css";

const Header = ({ user }) => {
  return (
    <div className="headerContainer">
      <img
        src="https://media-public.canva.com/xni2M/MADd2Bxni2M/2/t.png"
        alt="bell"
      ></img>
      <h2 className="avatar">T</h2>

      <h2>Welcome {user}</h2>
    </div>
  );
};

export default Header;
