import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./app/auth/login/Login";
import SignUp from "./app/auth/signup/SignUp";

const App = () => {
  return (
    <Routes>
     <Route path="/login" element={<Login />} />
      <Route path="/" element={<SignUp />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
