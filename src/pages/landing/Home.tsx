import React, { useContext } from "react";
import PublicLayout from "../../components/layouts/PublicLayout";
import { AuthStore } from "../../state/AuthContext";

export const Home = () => {
  const auth = useContext(AuthStore);

  return <PublicLayout>Home</PublicLayout>;
};
