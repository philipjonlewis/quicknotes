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

  const login = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, loginEmail, loginPassword);

      navigate("/dashboard");

      setLoginEmail("");
      setLoginPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <PublicLayout>
      <div>
        {" "}
        <div>
          <h3> Login </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}> Login</button>
        </div>
        <h4> User Logged In: </h4>
        <button onClick={logout}> Sign Out </button>
      </div>
    </PublicLayout>
  );
};

export default LogIn;
