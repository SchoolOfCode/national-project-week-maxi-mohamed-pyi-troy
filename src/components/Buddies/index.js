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
        <Meetings/>
      </div>
    </div>
  );
};

export default Buddies;
