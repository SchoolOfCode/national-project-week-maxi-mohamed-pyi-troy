import React from "react";
import "./index.css";
import Header from "../Header";

const Logo = ({ user, email, loggedIn, logOut }) => {
  console.log(loggedIn);
  return (
    <div className="topBanner">
      <div className="logoContainer">
        <img
          src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
          alt="logo"
          className="socLogo"
        />
        <h2 className="header-name">School of Code Dashboard</h2>
      </div>
      {loggedIn ? (
        <div>
          <Header user={user} email={email} logOut={logOut} />
        </div>
      ) : null}
    </div>
  );
};

export default Logo;
