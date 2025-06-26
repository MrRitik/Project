import React, { useEffect, useState } from 'react';
import { Drawer, List, ListItem, Toolbar } from '@mui/material';
import {
  Person as ProfileIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import HouseIcon from '@mui/icons-material/House';
import GroupsIcon from '@mui/icons-material/Groups';
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
  { text: 'Dashboard', icon: <HouseIcon />, path: '/dashboard' },
  { text: 'Profile', icon: <ProfileIcon />, path: '/dashboard/profile' },
  { text: 'Employees', icon: <GroupsIcon />, path: '/dashboard/employees' },
];

export const Sidebar: React.FC<SidebarProps> = ({ open, drawerWidth, collapsedWidth }) => {
  const [activePath, setActivePath] = useState('/dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const activeItem = menuItems.find(item => location.pathname === item.path);
    if (activeItem) setActivePath(activeItem.path);
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

      <List sx={{ flexGrow: 1, mt:3 }}>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemBtn
              open={open}
              active={activePath === path}
              onClick={() => {
                setActivePath(path);
                navigate(path);
              }}
            >
              <ListIcon open={open} sx={{ color: activePath === path ? '#2196f3' : '#808080' }}>
                {icon}
              </ListIcon>

              <ListText
                open={open}
                primary={text}
                slotProps={{
                  primary: {
                    sx: {
                      color: activePath === path ? '#2196f3' : '#808080',
                      fontWeight: 500,
                      fontSize: '16px',
                    },
                  },
                }}
              />
            </ListItemBtn>
          </ListItem>
        ))}
      </List>

      <LogoutButton
        startIcon={<LogoutIcon sx={{ color: 'white' }} />}
        onClick={() => navigate('/login')}
      >
        {open && 'Log Out'}
      </LogoutButton>
    </Drawer>
  );
};