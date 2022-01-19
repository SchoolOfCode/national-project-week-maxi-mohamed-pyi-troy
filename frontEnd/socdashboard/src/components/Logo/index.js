import React from "react";
import "./index.css";
import Header from "../Header";

const Logo = ({ user, email }) => {
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
      <div>
        <Header user={user} email={email}/>
      </div>
    </div>
  );
};

export default Logo;
