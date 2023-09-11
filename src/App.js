import React from "react";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from './Screens/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Login />}/>
        <Route path="/signup"  element={<Signup />} />
        <Route path="/signup"  element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
