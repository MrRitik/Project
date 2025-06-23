import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { MainLayout, DashboardLayout } from '@/layouts';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { About, Contact, Dashboard, Home, Login, Profile, Unauth, NotFound } from '@/pages';

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
        ],
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/profile', element: <Profile /> },
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
