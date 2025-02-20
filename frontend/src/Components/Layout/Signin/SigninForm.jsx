import React from "react";
import { ReactSVG } from "react-svg";
import Logo from "../../../assets/logo.svg";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const SigninForm = ({ email, setEmail, password, setPassword, userName, setUserName, handleSubmit, error, isRegister }) => {
  return (
    <div className="w-1/3 h-full bg-[#f5f6fa] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <ReactSVG src={Logo} />
        <div className="mt-4 text-4xl text-[#7E22CE] font-extralight tracking-widest text-center">
          {isRegister ? "Create an Account" : "Please Signin to"} <br />
          <div className="font-bold"> Ques.AI </div>
        </div>
      </div>
      <form className="w-[70%] mt-8">
        {isRegister && (
          <TextField 
            placeholder="Username" 
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}
        <TextField 
          placeholder="Email Address" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          placeholder="Password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button type="button" onClick={handleSubmit} className="w-full mt-6">
          {isRegister ? "Register" : "Login"}
        </Button>

        {!isRegister && (
          <>
            <div className="flex items-center justify-center mt-6">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <button className="w-full py-3 mt-6 border border-gray-300 rounded-lg flex items-center justify-center bg-white hover:bg-gray-100">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google Logo"
                className="w-6 h-6 mr-2"
              />
              Continue with Google
            </button>
          </>
        )}

        <div className="mt-6 text-center text-sm text-gray-600">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Sign In
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Create Account
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default SigninForm;