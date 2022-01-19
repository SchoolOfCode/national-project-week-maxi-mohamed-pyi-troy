// import {Routes, Route, Link} from "react-router-dom";
import "./App.css";
import LoginBox from "../LoginBox";
import Logo from "../Logo";
import NavBar from "../NavBar";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ email: "", bootcamperId: "" });
  const [loggedIn, setLoggedIn] = useState(false);

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
    // if(formData)
    e.preventDefault();
    if (formData.bootcamperId === "bootcamper") {
      console.log(formData.bootcamperId);
      console.log(loggedIn);
      setLoggedIn(!loggedIn);
    } else if (formData.bootcamperId === "admin") {
      console.log(formData.bootcamperId);
      console.log(loggedIn);
      setLoggedIn(!loggedIn);
    }
  }

  return (
    <div className="App">
      <Logo />
      <LoginBox handleChange={handleChange} handleSubmit={handleSubmit} />

      {loggedIn && <NavBar />}
    </div>
  );

}

export default App;
