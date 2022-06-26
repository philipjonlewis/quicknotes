import React, { useEffect, useState } from "react";
import PublicLayout from "../../components/layouts/PublicLayout";
import { firebaseAuth } from "../../database/firebaseClient";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const registerHandler = async (e: any) => {
    e.preventDefault();
    try {
      setIsSignUpClicked(true);
      const userCred = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );

      if (userCred) {
        setTimeout(() => {
          setRegisterEmail("");
          setRegisterPassword("");
          navigate("/dashboard");
        }, 3000);
      }
    } catch (error) {
      setIsSignUpClicked(false);
    }
  };

  return (
    <PublicLayout>
      <div className="signup-form-container">
        {!isSignUpClicked ? (
          <form onSubmit={registerHandler}>
            <p>Sign Up</p>
            <div className="form-container">
              <label htmlFor="email">Email</label>
              <input
                value={registerEmail}
                id="email"
                type="email"
                placeholder="name@email.com"
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-container">
              <label htmlFor="password">Password</label>
              <input
                value={registerPassword}
                id="password"
                type="password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
            </div>
            <button className="submit-button">Sign Up</button>
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
            <p>Signing Up and Logging In</p>
          </div>
        )}
      </div>
    </PublicLayout>
  );
};

export default SignUp;
