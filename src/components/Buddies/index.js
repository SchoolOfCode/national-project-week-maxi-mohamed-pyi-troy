import NavBar from "../NavBar";
import Logo from "../Logo";
import Meetings from "../Meetings";
import "./index.css";

const Buddies = ({ userID, formData, loggedIn, logOut }) => {
  return (
    <div>
      <Logo
        user={userID}
        email={formData.email}
        loggedIn={loggedIn}
        logOut={logOut}
      />
      <div className="main-buddy">
        <NavBar />
        <div className="meetings-container">
          <Meetings />
        </div>
      </div>
    </div>
  );
};

export default Buddies;
