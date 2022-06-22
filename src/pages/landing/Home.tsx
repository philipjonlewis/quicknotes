import React, { useContext } from "react";
import PublicLayout from "../../components/layouts/PublicLayout";
import { AuthStore } from "../../state/AuthContext";
import { LandingTypeEffect } from "../../components";
export const Home = () => {
  const auth = useContext(AuthStore);

  return (
    <PublicLayout>
      <div>
        <p> youDoNotes is a no</p>
        <LandingTypeEffect />
      </div>
    </PublicLayout>
  );
};
