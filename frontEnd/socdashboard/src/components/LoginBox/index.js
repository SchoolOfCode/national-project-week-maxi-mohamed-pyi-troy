import "./index.css";

export default function LoginBox({handleChange, handleSubmit}) {
  

  return (
    <div className="inputContainer">
      <h1>Welcome Bootcamper</h1>
      <h2>Please login with your email and bootcamper I.D</h2>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="emailInput"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          name="bootcamperId"
          className="idInput"
          onChange={handleChange}
          required
        ></input>
        <button className="loginSubmitButton">Login Now</button>
      </form>
    </div>
  );
}
