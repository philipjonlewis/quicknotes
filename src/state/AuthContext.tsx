import { useContext, createContext, useState, useEffect } from "react";
import { supabase } from "../components/authentication/supabaseClient";

import React from "react";

const isAuthenticated = supabase.auth.session();

const AuthStore = createContext(isAuthenticated);

const AuthContext = ({ children }: any) => {
  return (
    <AuthStore.Provider value={isAuthenticated}>{children}</AuthStore.Provider>
  );
};

export default AuthContext;

export { AuthStore };
