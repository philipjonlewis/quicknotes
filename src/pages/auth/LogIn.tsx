import React, { useState, useEffect } from "react";
import PublicLayout from "../../components/layouts/PublicLayout";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { firebaseAuth } from "../../database/firebaseClient";

import { Navigate, useNavigate } from "react-router-dom";
const LogIn = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const logInHandler = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoginClicked(true);
      const logInData = await signInWithEmailAndPassword(
        firebaseAuth,
        loginEmail,
        loginPassword
      );

      if (logInData) {
        setTimeout(() => {
          setLoginEmail("");
          setLoginPassword("");
          navigate("/dashboard");
        }, 3000);
      }
    } catch (error) {
      setIsLoginClicked(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoginClicked(false);
  }, []);

  return (
    <PublicLayout>
      <div className="login-form-container">
        {!isLoginClicked ? (
          <form onSubmit={logInHandler}>
            <p>Log In</p>
            <div className="form-container">
              <label htmlFor="email">Email</label>
              <input
                value={loginEmail}
                id="email"
                type="email"
                placeholder="name@email.com"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-container">
              <label htmlFor="password">Password</label>
              <input
                value={loginPassword}
                id="password"
                type="password"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
            </div>
            <button disabled={isLoginClicked} className="submit-button">
              Log In
            </button>
          </form>
        ) : (
          <div className="loading-container">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>Loggin In</p>
          </div>
        )}
      </div>
    </PublicLayout>
  );
};

export default LogIn;
