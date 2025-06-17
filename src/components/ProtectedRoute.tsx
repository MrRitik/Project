import type { JSX } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  userRole: string;
  allowedRoles: string[];
  children: JSX.Element;
};

const ProtectedRoute = ({
  isAuthenticated,
  userRole,
  allowedRoles,
  children,
}: ProtectedRouteProps) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default ProtectedRoute;
