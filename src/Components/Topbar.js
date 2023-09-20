import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Avatar, Dropdown, Menu } from "antd";

import { useNavigate } from "react-router-dom";

function Topbar() {
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
      localStorage.removeItem("token"); // Remove the token from local storage
      localStorage.removeItem("user"); // Remove user data from local storage
      navigate("/login"); // Navigate to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item
        onClick={handleLogout}
        style={{ color: "#000", fontFamily: "cursive" }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <h1>
        {user ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "#9775ff", fontFamily: "cursive" }}>
              Welcome <span> {user}</span>
            </p>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar
                size={40}
                style={{ backgroundColor: "#A268FF", cursor: "pointer" }}
              >
                {user.split(" ")[0].charAt(0)}
              </Avatar>
            </Dropdown>
          </div>
        ) : (
          <p>Welcome home</p>
        )}
      </h1>
    </div>
  );
}

export default Topbar;
