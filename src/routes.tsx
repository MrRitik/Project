import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateRoute from "./components/PrivateRoute";
import  Unauth from "./pages/Unauth";

const isAuthenticated = true;
const userRole = "admin"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },

      {
        path: "profile",
        element: (
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            userRole={userRole}
            allowedRoles={["admin"]}
          >
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute isAuthenticated={isAuthenticated}>
        <Dashboard />
      </PrivateRoute>
    ),
  },

  { path: "/login", element: <Login /> },

  {
    path: "/unauthorized",
    element: <Unauth />,
  },
]);

export default router;
