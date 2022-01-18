import "./index.css";
import { useState } from "react";

export default function LoginBox() {
  const [formData, setFormData] = useState({ email: "", bootcamperId: "" });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (formData.bootcamperId === "bootcamper") {
      console.log("bootcamper");
      return true;
    } else if (formData.bootcamperId === "admin") {
      console.log("admin");
      return true;
    }
  }

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
        ></input>
        <input
          type="text"
          name="bootcamperId"
          className="idInput"
          onChange={handleChange}
        ></input>
        <button className="loginSubmitButton">Login Now</button>
      </form>
    </div>
  );
}
