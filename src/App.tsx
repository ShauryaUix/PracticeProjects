import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Landing from "./components/Landing";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Landing />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoutes>
              <Signup />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoutes>
              <Signin />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
