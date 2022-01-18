import React from "react";

const Header = ({ user }) => {
  return (
    <div className="headerContainer">
      <img src="https://media-public.canva.com/xni2M/MADd2Bxni2M/2/t.png"></img>
      <img src="https://media-public.canva.com/Jz7zs/MACSFhJz7zs/2/t.png"></img>
      <h2>Welcome {user}</h2>
    </div>
  );
};

export default Header;
