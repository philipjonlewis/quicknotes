import React from "react";
import { LandingNavbar } from "../components";
const PublicLayout = ({ children }) => {
  return (
    <div>
      <LandingNavbar />
      {children}
    </div>
  );
};

export default PublicLayout;
