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
      <div className="logo-container">
        <p>youDoNotes</p>
      </div>
      <NavLink to={"/"}>Home</NavLink>
      {!auth.status && <NavLink to={"/login"}>Log In</NavLink>}
      {!auth.status && <NavLink to={"/signup"}>Sign Up</NavLink>}
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/account"}>Account</NavLink>
      {auth.status && <button onClick={logout}>Sign Out</button>}
    </div>
  );
};

export default LandingNavbar;
