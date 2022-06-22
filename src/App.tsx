import React, { useEffect, useState, useContext } from "react";
import EditorComponent from "./components/editor/EditorComponent";

import { Routes, Route, useLocation } from "react-router-dom";

import RequireAuth from "./auth/RequireAuth";
import AccountAuth from "./auth/AccountAuth";

import { Home, Dashboard, LogIn, SignUp, Account } from "./pages";

import { LandingNavbar, ErrorPage } from "./components";
import AuthContext from "./state/AuthContext";
import { AuthStore } from "./state/AuthContext";

const App = () => {
  const location = useLocation();

  return (
    <AuthContext>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/account"
          element={
            <AccountAuth>
              <Account />
            </AccountAuth>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthContext>
  );
};

export default App;
