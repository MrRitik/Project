import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { appBar, toolbar, logoLink, linksContainer } from './styled';

const isAuthenticated = true;
const userRole = 'admin';

export const NavBar = () => {
  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact Us', path: '/contact' },
  ];

  if (isAuthenticated) {
    navItems.push({ text: 'Dashboard', path: '/dashboard' });
  }

  if (isAuthenticated && ['admin', 'manager'].includes(userRole)) {
    navItems.push({ text: 'Profile', path: '/profile' });
  }

  return (
    <AppBar position="static" sx={appBar}>
      <Toolbar sx={toolbar}>
        <Box component={Link} to="/" sx={logoLink}>
          MyLogo
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={linksContainer}>
          {navItems.map(item => (
            <Button key={item.text} component={Link} to={item.path} color="inherit">
              {item.text}
            </Button>
          ))}
          <Button component={Link} to={isAuthenticated ? '/login' : '/login'} color="inherit">
            {isAuthenticated ? 'Logout' : 'Login'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
