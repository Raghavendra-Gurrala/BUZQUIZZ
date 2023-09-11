import React, { useState } from "react";
import styles from "./Login.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";
import { getAuth } from "../Configurations/Firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const newValue = e.target.value.toLowerCase().replace(/[^a-z@.]/g, "");
    setEmail(newValue);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    const newValue = e.target.value.replace(/[^A-Za-z]/g, ""); // Allow only alphabetic characters
    setName(newValue);
  };

  const handleSignupForm = async (e) => {
    e.preventDefault();
    // Add your Firebase authentication logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.container}>
      {" "}
      {/* Use the scoped CSS module class */}
      <form onSubmit={handleSignupForm} className={styles.form}>
        <h1>BUZQUIZZ</h1>
        <h2>SIGN UP</h2>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Enter your Name"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.buttoninput}>
          <button type="submit" className={styles.button}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
