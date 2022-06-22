import React, { useEffect, useState } from "react";
import PublicLayout from "../../components/layouts/PublicLayout";
import { firebaseAuth } from "../../database/firebaseClient";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({}) as any;

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser: any) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );

      console.log(userCred);
    } catch (error) {
      console.log(error);
    }

    setRegisterEmail("");
    setRegisterPassword("");
  };

  return (
    <PublicLayout>
      {" "}
      <div>
        <h3> Register User </h3>
        <input
          value={registerEmail}
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          value={registerPassword}
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        {user?.email}
        <button onClick={register}>Sign Up</button>
      </div>
    </PublicLayout>
  );
};

export default SignUp;
