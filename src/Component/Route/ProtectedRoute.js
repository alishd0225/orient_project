import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
            currentUser ? <Component {...props} /> : <Navigate to="signin/" />;
        }}
      />
    </Routes>
  );
}

export default ProtectedRoute;
