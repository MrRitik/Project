import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Profile } from '@/pages/profile';
import { Login } from '@/pages/login';
import { Home } from '@/pages/home';
import { Dashboard } from '@/pages/dashboard';
import { About } from '@/pages/about';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';
import { Unauth } from '@/pages/Unauth';
import { Contact } from '@/pages/contact';
const isAuthenticated = true;
const userRole = 'admin';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
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
        path: '/dashboard',
        element: (
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: 'contact', element: <Contact /> },
    ],
  },
  { path: '/login', element: <Login /> },
  {
    path: '/unauthorized',
    element: <Unauth />,
  },
]);
export default router;
