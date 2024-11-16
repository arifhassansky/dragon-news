/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "./auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
