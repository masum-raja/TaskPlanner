import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/account" />;
  }

  return children;
};

export default PrivateRoute;
