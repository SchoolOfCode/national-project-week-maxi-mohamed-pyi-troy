import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="listContainer">
        <div className="nav-logos">
          <Link to="/main">
            <li>
              <img
                src="https://media-public.canva.com/cnmeE/MADE1RcnmeE/2/t.png"
                alt="libraryLogo"
              ></img>
              <p className="link-text">Bootcamper Library</p>
            </li>
          </Link>
          <Link to="/buddies">
            <li>
              <img
                src="https://media-public.canva.com/8wuZ4/MAESjo8wuZ4/1/t.png"
                alt="studyBuddyLogo"
              ></img>
              <p>Study Buddeis</p>
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
