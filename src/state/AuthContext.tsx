import { useContext, createContext, useState, useEffect } from "react";
import { firebaseDb } from "../database/firebaseClient";

import React from "react";

const AuthStore = createContext("");

const AuthContext = ({ children }: any) => {




  
  return <>{children}</>;
};

export default AuthContext;

export { AuthStore };
