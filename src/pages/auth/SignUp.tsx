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
  const [user, setUser] = useState({}) as any;

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser: any) => {
      setUser(currentUser);
    });
  }, []);

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      navigate("/dashboard");
      console.log(userCred);
    } catch (error) {
      console.log(error);
    }

    setRegisterEmail("");
    setRegisterPassword("");
  };

  return (
    <PublicLayout>
      <div className="signup-form-container">
        <form onSubmit={register}>
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
      </div>
    </PublicLayout>
  );
};

export default SignUp;
