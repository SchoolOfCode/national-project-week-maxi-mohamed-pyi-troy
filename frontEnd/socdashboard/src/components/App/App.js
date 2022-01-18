// import {Routes, Route, Link} from "react-router-dom";
import "./App.css";
import LoginBox from "../LoginBox";
import Logo from "../Logo";
import NavBar from "../NavBar";
// import {useState} from "react";

function App() {
  return (
    <div className="App">
      <Logo />

      <LoginBox />
      <NavBar />
    </div>
  );
}

export default App;
