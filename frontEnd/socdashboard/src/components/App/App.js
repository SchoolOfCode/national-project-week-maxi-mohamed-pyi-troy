import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import LoginBox from "../LoginBox";
import Logo from "../Logo";
import NavBar from "../NavBar";
import { useState } from "react";
import Library from "../Library";
import Header from "../Header";
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
      console.log(loggedIn);
      setLoggedIn(!loggedIn);
      setUserID("bootcamper");
      navigate("/main");
    } else if (formData.bootcamperId === "admin") {
      console.log(formData.bootcamperId);
      console.log(loggedIn);
      setLoggedIn(!loggedIn);
      setUserID("admin");
      navigate("/main");
    }
  }

  if (userID === "admin") {
    return [
      <Logo user={userID} email={formData.email} />,
      <NavBar />,
      <Library user={userID} />,
    ];
  } else if (userID === "bootcamper") {
    return [
      <Logo user={userID} email={formData.email} />,
      <NavBar />,
      <Library user={userID} />,
    ];
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginBox handleChange={handleChange} handleSubmit={handleSubmit} />
        }
      />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;

{
  /* <div className="App">
<Logo />
<LoginBox handleChange={handleChange} handleSubmit={handleSubmit} />

{loggedIn && <NavBar /> }
{loggedIn && <Header user={userID}/>}
<Library />
</div> */
}
