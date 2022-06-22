import React, { useContext } from "react";
import PublicLayout from "../auth/PublicLayout";
import { AuthStore } from "../state/AuthContext";

export const Home = () => {
  const auth = useContext(AuthStore);

  return <PublicLayout>Home</PublicLayout>;
};
