import React, { useState } from "react";
import styles from "./Login.module.css"; // Import the CSS module
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Configurations/Firebase";
import { notification } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const newValue = e.target.value.toLowerCase().replace(/[^a-z@.]/g, "");
    setEmail(newValue);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handlesignup = () => {
  //   navigate("./signup");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("token", user.accessToken);
        sessionStorage.setItem("user", JSON.stringify(user));

        navigate("/");
        console.log(user);
        notification.success({
          message: "Signin Successful",
          description: "You have successfully signed in!",
          style: {
            fontFamily: "Georgia",
            fontWeight: "bold",
            fontSize: 14,
          },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Check if the error code indicates that the user does not exist
        if (errorCode === "auth/user-not-found") {
          notification.error({
            message: "User does not exist",
            description: "Please sign up first.",
            style: {
              fontFamily: "Georgia",
              fontWeight: "bold",
              fontSize: 14,
            },
          });
        } else if (errorCode === "auth/user-not-found") {
          // Handle other authentication errors
          console.log(errorCode, errorMessage);
        }
      });
  };

  return (
    <div className={styles.container}>
      {" "}
      {/* Use the scoped CSS module class */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>BUZQUIZZ</h1>
        <h2>Login</h2>
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
            Submit
          </button>
        </div>
        <div className={styles.signuptag}>
          Don't have an Account?{" "}
          <Link
            to="/signup"
            style={{
              textDecorationLine: "underline",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Signup here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
