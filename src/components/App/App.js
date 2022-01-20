import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import LoginBox from "../LoginBox";
// import Logo from "../Logo";
// import NavBar from "../NavBar";
import { useState } from "react";
// import Library from "../Library";
// import Header from "../Header";
import Main from "../Main";

function App() {
  const [formData, setFormData] = useState({ email: "", bootcamperId: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");

  let navigate = useNavigate();

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(e) {
    console.log(formData);
    e.preventDefault();
    if (formData.bootcamperId === "bootcamper") {
      console.log(formData.bootcamperId);

      setLoggedIn(!loggedIn);
      setUserID("bootcamper");
      navigate("/main");
    } else if (formData.bootcamperId === "admin") {
      console.log(formData.bootcamperId);

      setLoggedIn(!loggedIn);
      setUserID("admin");
      navigate("/main");
    }
  }

  function logOut() {
    setLoggedIn((prevState) => !prevState);
    navigate("/");
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LoginBox handleChange={handleChange} handleSubmit={handleSubmit} />
          }
        />
        <Route
          path="/main"
          element={
            <Main
              userID={userID}
              formData={formData}
              loggedIn={loggedIn}
              logOut={logOut}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

