import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  isAuthenticated: boolean;
  children: JSX.Element;
};

const PrivateRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
