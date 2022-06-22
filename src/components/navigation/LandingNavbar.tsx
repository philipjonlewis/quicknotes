import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthStore } from "../../state/AuthContext";

const LandingNavbar = () => {
  const auth = useContext(AuthStore);
  console.log(auth);

  return (
    <div className="landing-navbar">
      <div className="logo-container">
        <p>youDoNotes</p>
      </div>
      <NavLink to={"/"}>Home</NavLink>
      {!auth && <NavLink to={"/login"}>Log In</NavLink>}
      {!auth && <NavLink to={"/signup"}>Sign Up</NavLink>}
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/account"}>Account</NavLink>
    </div>
  );
};

export default LandingNavbar;
