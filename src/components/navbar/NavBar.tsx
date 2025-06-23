import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledAppBar, StyledToolbar, StyledLogoLink, Links } from './styled';

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
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledLogoLink to="/">MyLogo</StyledLogoLink>
        <div style={{ flexGrow: 1 }} />
        <Links>
          {navItems.map(item => (
            <Button key={item.text} component={Link} to={item.path} color="inherit">
              {item.text}
            </Button>
          ))}
          <Button component={Link} to={isAuthenticated ? '/login' : '/login'} color="inherit">
            {isAuthenticated ? 'Logout' : 'Login'}
          </Button>
        </Links>
      </StyledToolbar>
    </StyledAppBar>
  );
};
