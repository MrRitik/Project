import React, { useEffect, useState } from 'react';
import { Box, Drawer, List, ListItem, Toolbar, Typography } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as ProfileIcon,
  Group as EmployeesIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import {
  DrawerStyles,
  LogoWrapper,
  LogoImage,
  ListItemBtn,
  ListIcon,
  ListText,
  LogoutButton,
} from './styles';
import { aiThinker } from '@/assets/images';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  open: boolean;
  drawerWidth: number;
  collapsedWidth: number;
}
const menuItems = [
  { text: 'Profile', icon: <ProfileIcon />, path: '/dashboard/profile' },
  { text: 'Employees', icon: <EmployeesIcon />, path: '/dashboard/employees' },
];

export const Sidebar: React.FC<SidebarProps> = ({ open, drawerWidth, collapsedWidth }) => {
  const [active, setActive] = useState('Profile');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const activeItem = menuItems.find(item => location.pathname.includes(item.path));
    if (activeItem) setActive(activeItem.text);
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      sx={DrawerStyles(open, drawerWidth, collapsedWidth)}
      slotProps={{ paper: { elevation: 0 } }}
    >
      <Toolbar disableGutters>
        <LogoWrapper>
          <LogoImage src={aiThinker} alt="AI Thinkers Logo" />
        </LogoWrapper>
      </Toolbar>

      <List sx={{ flexGrow: 1 }}>
        {/* Static Dashboard item */}
        <ListItem disablePadding sx={{ px: 3, py: 2 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <DashboardIcon fontSize="small" sx={{ color: '#808080' }} />
            {open && (
              <Typography variant="body2" sx={{ color: '#808080', fontWeight: 500 }}>
                Dashboard
              </Typography>
            )}
          </Box>
        </ListItem>

        {/* Menu Items */}
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemBtn
                open={open}
                active={active === text}
                onClick={() => {
                  setActive(text);
                  navigate(path);
                }}
              >
                <ListIcon open={open} sx={{ color: active === text ? '#2196f3' : '#808080' }}>
                  {icon}
                </ListIcon>
                <ListText
                  open={open}
                  primary={text}
                  slotProps={{
                    primary: {
                      sx: {
                        color: active === text ? '#2196f3' : '#808080',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                      },
                    },
                  }}
                />
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      </List>

      <LogoutButton startIcon={<LogoutIcon sx={{ color: 'white' }} />}>
        {open && 'Log Out'}
      </LogoutButton>
    </Drawer>
  );
};
