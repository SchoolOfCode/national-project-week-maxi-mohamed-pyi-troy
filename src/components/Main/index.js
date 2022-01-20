import Logo from "../Logo";
import NavBar from "../NavBar";
import { useState } from "react";
import Library from "../Library";
import Header from "../Header";
import Buddies from "../Buddies";
import "./main.css";

const Main = ({ userID, formData, loggedIn, logOut }) => {
  return (
    <div className="main-div">
      <Logo
        user={userID}
        email={formData.email}
        loggedIn={loggedIn}
        logOut={logOut}
      />
      <div className="main-library">
        <NavBar />
        <Library user={userID} className="libraryComponent" />
        <Buddies />
      </div>
    </div>
  );
};
export default Main;
