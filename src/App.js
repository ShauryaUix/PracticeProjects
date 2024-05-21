// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Landing from "./components/Landing";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProtectedRouteForSign from "./components/ProtectedRouteForSign";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRouteForSign>
              <Signup />
            </ProtectedRouteForSign>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRouteForSign>
              <Signin />
            </ProtectedRouteForSign>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRouteForSign>
              <Landing />
            </ProtectedRouteForSign>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
