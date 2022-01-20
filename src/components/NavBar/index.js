import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <nav>
        <ul className="listContainer">
          <div className="nav-logos">
            <li>
              <img
                src="https://media-public.canva.com/cnmeE/MADE1RcnmeE/2/t.png"
                alt="libraryLogo"
              ></img>
            </li>
            <li>
              <img
                src="https://media-public.canva.com/8wuZ4/MAESjo8wuZ4/1/t.png"
                alt="studyBuddyLogo"
              ></img>
            </li>
            <li>
              <img
                src="https://media-public.canva.com/HHe5s/MAD2U9HHe5s/1/t.png"
                alt="starIcon"
              ></img>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
