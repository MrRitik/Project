import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';
import { MainLayout, SimpleLayout } from '@/layouts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { Home, Contact, Login, Unauth, NotFound, Profile, Dashboard, Employees } from '@/pages';

const isAuthenticated = true;
const userRole = 'admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: (
          <SimpleLayout>
            <Outlet />
          </SimpleLayout>
        ),
        children: [
          { index: true, element: <Home /> },
          { path: 'contact', element: <Contact /> },
        ],
      },
      {
        path: '/',
        element: (
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <MainLayout />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Dashboard /> },
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
  { path: '/unauthorized', element: <Unauth /> },
  { path: '*', element: <NotFound /> },
]);

export default router;
