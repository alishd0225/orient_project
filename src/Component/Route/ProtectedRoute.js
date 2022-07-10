import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth, useAuthValue } from "../context/AuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuthValue();

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
