export default function LoginBox() {
  return (
    <div className="inputContainer">
      <h1>Welcome Bootcamper</h1>
      <h2>Please login with your email and bootcamper I.D</h2>
      <form className="inputForm">
        <input type="email" className="emailInput"></input>
        <input type="text" className="idInput"></input>
        <button className="loginSubmitButton">Login Now</button>
      </form>
    </div>
  );
}
