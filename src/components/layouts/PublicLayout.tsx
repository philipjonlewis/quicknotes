import React from "react";
import { LandingNavbar } from "..";
const PublicLayout = ({ children }: any) => {
  return (
    <div>
      <LandingNavbar />
      {children}
    </div>
  );
};

export default PublicLayout;
