// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { supabase } from "../components/authentication/supabaseClient";
import { Account } from "../pages";
import { LogIn } from "../pages";

const AccountAuth = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    console.log(supabase);
  }, []);
  //   const { isAuthenticated } = useSelector((state) => state.auth);

  //   if (!isAuthenticated) {
  //     return <Navigate to="/login" />;
  //   }

  if (!session) {
    return <LogIn />;
  } else {
    return <Account key={session.user.id} session={session} />;
  }
};

export default AccountAuth;
