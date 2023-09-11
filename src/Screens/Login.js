import React, { useState } from 'react';
import styles from './Login.module.css'; // Import the CSS module

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    const newValue = e.target.value.toLowerCase().replace(/[^a-z@]/g, '');
    setEmail(newValue);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your Firebase authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}> {/* Use the scoped CSS module class */}
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
        <button type="submit" className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
