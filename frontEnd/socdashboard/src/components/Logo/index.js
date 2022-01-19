import React from "react";
import "./index.css";
import Header from "../Header";

const Logo = ({ user }) => {
  return (
    <div className="topBanner">
      <div className="logoContainer">
        <img
          src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
          alt="logo"
          className="socLogo"
        />
        <h2>School of Code Dashboard</h2>
      </div>
      <div className="headerRight">
        <Header user={user} />
      </div>
    </div>
  );
};

export default Logo;
