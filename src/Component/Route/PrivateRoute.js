import { Route, Navigate, Routes } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuthValue();

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Navigate to="/signin" />
          );
        }}
      />
    </Routes>
  );
}
