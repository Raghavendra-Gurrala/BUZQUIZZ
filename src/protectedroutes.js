import React from "react";
import { Outlet } from "react-router-dom";

const Protectedroutes = () => {
  console.log("Protectedroutes component rendered"); // Add this line
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protectedroutes;
