

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginIntro from "../Components/Layout/Login/LoginIntro";
import SigninForm from "../Components/Layout/Signin/SigninForm";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await signup(email, password, userName);
      if (success) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center">
      <LoginIntro />
      <SigninForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        userName={userName}
        setUserName={setUserName}
        handleSubmit={handleSubmit}
        error={error}
        isRegister={true}
      />
    </div>
  );
}

export default Register;