import React, { useContext, useEffect } from "react";

import { AuthStore } from "../../state/AuthContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: any) => {
  const auth = useContext(AuthStore) as any;

  useEffect(() => {
    console.log("inside require auth", auth);
  }, []);

  if (auth.status) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
