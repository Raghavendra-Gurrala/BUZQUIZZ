import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Firebase auth
    const auth = getAuth();

    // Listen for changes in user authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, fetch user information
        const { displayName } = user;
        setUser(displayName);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      sessionStorage.removeItem("token"); // Remove the token from local storage
      sessionStorage.removeItem("user"); // Remove user data from local storage
      navigate("/login"); // Navigate to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome {user}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Welcome home</p>
      )}
    </div>
  );
}
