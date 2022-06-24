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
  // const [user, setUser] = useState({}) as any;

  // useEffect(() => {
  //   onAuthStateChanged(firebaseAuth, (currentUser: any) => {
  //     console.log("hi", currentUser);
  //     setUser(currentUser);
  //   });
  // }, []);

  const logInHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(firebaseAuth, loginEmail, loginPassword);

      navigate("/dashboard");

      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PublicLayout>
      <div className="login-form-container">
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
          <button className="submit-button">Log In</button>
        </form>
      </div>
    </PublicLayout>
  );
};

export default LogIn;
