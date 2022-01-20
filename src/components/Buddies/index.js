import NavBar from "../NavBar";
import Logo from "../Logo";

const Buddies = ({ userID, formData, loggedIn, logOut }) => {
  return (
    <div>
      <Logo
        user={userID}
        email={formData.email}
        loggedIn={loggedIn}
        logOut={logOut}
      />
      <NavBar />
      <h1>Buddies</h1>
    </div>
  );
};

export default Buddies;
