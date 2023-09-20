import React, { useState } from "react";
import styles from "./Signup.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";
import { auth } from "../Configurations/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { notification, Tooltip } from "antd";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const newValue = e.target.value.toLowerCase().replace(/[^a-z@.]/g, "");
    setEmail(newValue);
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);

    // Password validation logic
    if (newValue.length < 6 || newValue.length > 12) {
      setPasswordError("Password must contain 3 to 20 characters");
    } else {
      setPasswordError(null);
    }
  };

  const handleName = (e) => {
    let newValue = e.target.value;

    // Remove any characters that are not letters (A-Z or a-z)
    newValue = newValue.replace(/[^A-Za-z ]/g, "");

    // Convert the first letter to uppercase
    newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);

    setName(newValue);

    // Name validation logic
    if (newValue.length < 3 || newValue.length > 20) {
      setNameError("Names must contain 3 to 20 characters");
    } else {
      setNameError(null);
    }
  };

  const handleSignupForm = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile with the name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // Now you can access the user's name via userCredential.user.displayName
      console.log("User signed up successfully:", userCredential.user);

      const user = userCredential.user;
      sessionStorage.setItem("token", user.accessToken);
      sessionStorage.setItem("user", JSON.stringify(user));

      notification.success({
        message: "Signup Successful",
        description: "You have successfully signed up!",
        style: {
          fontFamily: "Georgia",
          fontWeight: "bold",
          fontSize: 14,
        },
      });

      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  const handlesignin = () => {
    navigate("/login");
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
          <Tooltip
            title={nameError} // Pass the name error message as the tooltip content
            visible={!!nameError} // Show the tooltip only when there's an error
            placement="topLeft" // Adjust the placement as needed
            color="linear-gradient(45deg, #627bf7, #D1C1FF)"
          >
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="Enter your name"
              required
              className={styles.input}
            />
          </Tooltip>
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
          <Tooltip
            title={passwordError}
            visible={!!passwordError}
            placement="topLeft"
            color="linear-gradient(45deg, #627bf7, #D1C1FF)"
          >
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
              className={styles.input}
            />
          </Tooltip>
        </div>
        <div className={styles.buttoninput}>
          <button type="submit" className={styles.button}>
            Signup
          </button>
        </div>
        <div className={styles.signintag}>
          Already have an Account?{" "}
          <span
            style={{
              textDecorationLine: "underline",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={handlesignin}
          >
            Signin here
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
