import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthStore } from "../../state/AuthContext";
import { firebaseAuth } from "../../database/firebaseClient";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
const LandingNavbar = () => {
  const auth = useContext(AuthStore) as any;

  const logout = async (e) => {
    e.preventDefault();
    await signOut(firebaseAuth);
    window.location.reload();
    return <Navigate to="/" />;
  };

  return (
    <div className="landing-navbar">
      <NavLink to={"/"} className="logo-container">
        <p>QuickNotes</p>
      </NavLink>
      <div className="link-container">
        {!auth.status && (
          <NavLink className="login-link" to={"/login"}>
            Log In
          </NavLink>
        )}
        {!auth.status && (
          <NavLink className="signup-link" to={"/signup"}>
            Sign Up
          </NavLink>
        )}
        {auth.status && <NavLink to={"/dashboard"}>Dashboard</NavLink>}
        {auth.status && <div onClick={logout}>Sign Out</div>}
      </div>
    </div>
  );
};

export default LandingNavbar;
