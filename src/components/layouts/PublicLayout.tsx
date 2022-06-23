import React from "react";
import { LandingNavbar } from "..";
const PublicLayout = ({ children }: any) => {
  return (
    <div className="public-layout">
      <div className="landing-page">
        <LandingNavbar />
        {children}
      </div>
    </div>
  );
};

export default PublicLayout;
