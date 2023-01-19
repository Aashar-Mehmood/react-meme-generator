import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsletter: false,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword, joinedNewsletter } = formData;
    if (confirmPassword === password) {
      console.log("Successfully Signed Up");
      joinedNewsletter && console.log("Thanks for joining our news letter");
    } else {
      console.log("Passwords does not match");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" name="email" id="email" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="confirmPassword">Password</label>
      <br />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="joinedNewsletter">I want to join news letter</label>
      &nbsp;&nbsp;
      <input
        type="checkbox"
        name="joinedNewsletter"
        id="joinedNewsletter"
        checked={formData.joinedNewsletter}
        onChange={handleChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
