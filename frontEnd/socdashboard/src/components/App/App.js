import "./App.css";
import LoginBox from "../LoginBox";
import Logo from "../Logo";
import NavBar from "../NavBar";
import Header from "../Header";

function App() {
  return (
    <div className="App">
      <img
        src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
        alt="logo"
        className="socLogo"
      />
      <Logo />
      <Header user="bootcamper" />
      <LoginBox />
      <NavBar />
    </div>
  );
}

export default App;
