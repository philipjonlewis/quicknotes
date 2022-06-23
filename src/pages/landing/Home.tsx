import React, { useContext } from "react";
import PublicLayout from "../../components/layouts/PublicLayout";
import { AuthStore } from "../../state/AuthContext";
import { LandingTypeEffect } from "../../components";
import { DisplayEditor } from "../../components";

export const Home = () => {
  const auth = useContext(AuthStore);

  return (
    <PublicLayout>
      <div className="home-page">
        <div className="hero-text">
          <p> QuickNotes is a&nbsp;</p>
          <div className="type-effect">
            <LandingTypeEffect />
          </div>
          <p>&nbsp;free Block style text editor note taking app thing</p>
        </div>
        <div className="hero-sample">
          <DisplayEditor />
        </div>
      </div>
    </PublicLayout>
  );
};
