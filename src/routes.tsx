  import { createBrowserRouter } from "react-router-dom";
  import Home from "./pages/Home";
  import ProtectedRoute from "./components/ProtectedRoute";
  import About from "./pages/About";
  import Dashboard from "./pages/Dashboard";
  import Login from "./pages/Login";
  import App from "./App";
import Profile from "./pages/Profile";

  const isAuthenticated = false; 

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
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  export default router;
