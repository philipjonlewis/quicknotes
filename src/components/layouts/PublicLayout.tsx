import React from "react";
import { LandingNavbar } from "..";
const PublicLayout = ({ children }) => {
  return (
    <div>
      <LandingNavbar />
      {children}
    </div>
  );
};

export default PublicLayout;
