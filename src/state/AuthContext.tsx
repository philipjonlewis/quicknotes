import { useContext, createContext, useState, useEffect } from "react";
import { firebaseDb } from "../database/firebaseClient";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../database/firebaseClient";
import React from "react";

const AuthStore = createContext("");

const AuthContext = ({ children }: any) => {
  const [authUid, setAuthUid] = useState({
    status: false,
    uid: "",
  }) as any;

  useEffect(() => {
    console.log("testing");
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser !== null) {
        setAuthUid((state: any) => {
          return { status: true, uid: currentUser.uid };
        });
      }
    });
  }, [firebaseAuth]);

  return <AuthStore.Provider value={authUid}>{children}</AuthStore.Provider>;
};

export default AuthContext;

export { AuthStore };
