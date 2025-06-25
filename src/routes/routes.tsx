import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { MainLayout, DashboardLayout } from '@/layouts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { About, Contact, Home, Login, Unauth, NotFound } from '@/pages';
import { Employees, Profile } from '@/components';

const isAuthenticated = true;
const userRole = 'admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> },
        ],
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Profile /> },
          {
            path: 'profile',
            element: (
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                userRole={userRole}
                allowedRoles={['admin']}
              >
                <Profile />
              </ProtectedRoute>
            ),
          },
          {
            path: 'employees',
            element: (
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                userRole={userRole}
                allowedRoles={['admin']}
              >
                <Employees />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
  { path: '/login', element: <Login /> },

  {
    path: '/unauthorized',
    element: <Unauth />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
