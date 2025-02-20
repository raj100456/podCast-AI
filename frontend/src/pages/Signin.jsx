import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginIntro from "../Components/Layout/Login/LoginIntro";
import LoginSign from "../Components/Layout/Login/LoginSign";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate("/")
    }

  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
      if (success) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center">
      <LoginIntro />
      <LoginSign
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}

export default Login;