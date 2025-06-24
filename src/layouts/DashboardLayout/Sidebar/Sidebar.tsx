// Sidebar.tsx
import React, { useState } from 'react';
import { Drawer, List, ListItem, Toolbar } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as ProfileIcon,
  Group as EmployeesIcon,
} from '@mui/icons-material';

import { DrawerStyles, LogoWrapper, LogoImage, ListItemBtn, ListIcon, ListText } from './styles';
import { aiThinker } from '@/assets/images';

interface SidebarProps {
  open: boolean;
  drawerWidth: number;
  collapsedWidth: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, drawerWidth, collapsedWidth }) => {
  const [active, setActive] = useState('Profile');

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, disabled: true },
    { text: 'Profile', icon: <ProfileIcon /> },
    { text: 'Employees', icon: <EmployeesIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={DrawerStyles(open, drawerWidth, collapsedWidth)}
      PaperProps={{ elevation: 0 }}
    >
      <Toolbar disableGutters>
        <LogoWrapper>
          <LogoImage src={aiThinker} alt="AI Thinkers Logo" />
        </LogoWrapper>
      </Toolbar>

      <List>
        {menuItems.map(({ text, icon, disabled }) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemBtn
              open={open}
              active={active === text}
              disabled={disabled}
              onClick={() => !disabled && setActive(text)}
            >
              <ListIcon open={open}>{icon}</ListIcon>
              <ListText open={open} primary={text} />
            </ListItemBtn>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
