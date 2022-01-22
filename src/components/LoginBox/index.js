import "./index.css";
// import Logo from "../Logo";

export default function LoginBox({
  handleChange,
  handleSubmit,
  userID,
  formData,
}) {
  return (
    <>
      <div className="logoContainer">
        <img
          src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
          alt="logo"
          className="socLogo"
        />
        <h2>School of Code Dashboard</h2>
      </div>
      <div className="inputContainer">
        <h1 className="login-title">Welcome Bootcamper</h1>
        <h2 className="login-subtitle">
          Please login with your email and bootcamper I.D
        </h2>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="emailInput"
            onChange={handleChange}
            required
            placeholder="Email"
          ></input>
          <input
            type="text"
            name="bootcamperId"
            className="idInput"
            onChange={handleChange}
            required
            placeholder="bootcamper || admin"
          ></input>
          <button className="loginSubmitButton">Login Now</button>
        </form>
      </div>
    </>
  );
}
