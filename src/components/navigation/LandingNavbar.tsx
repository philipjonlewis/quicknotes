import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthStore } from "../../state/AuthContext";
import { firebaseAuth } from "../../database/firebaseClient";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
const LandingNavbar = () => {
  const auth = useContext(AuthStore) as any;

  const logout = async (e) => {
    e.preventDefault();
    await signOut(firebaseAuth);
    window.location.reload();
    return <Navigate to="/" />;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.2 } },
      }}
      className="landing-navbar"
    >
      <NavLink to={"/"} className="logo-container">
        <p className="logo">QuickNotes</p>
      </NavLink>

      <div className="link-container">
        {!auth.status && (
          <NavLink className="login-link link-btn" to={"/login"}>
            Log In
          </NavLink>
        )}
        {!auth.status && (
          <NavLink className="signup-link link-btn" to={"/signup"}>
            Sign Up
          </NavLink>
        )}
        {auth.status && (
          <NavLink className="link-btn" to={"/dashboard"}>
            Dashboard
          </NavLink>
        )}
        {auth.status && (
          <div className="link-btn" onClick={logout}>
            Sign Out
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default LandingNavbar;
