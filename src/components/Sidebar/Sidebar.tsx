import React, { useEffect } from 'react';
import { Drawer, List, ListItem, Toolbar } from '@mui/material';
import { Person as ProfileIcon, Logout as LogoutIcon } from '@mui/icons-material';
import HouseIcon from '@mui/icons-material/House';
import GroupsIcon from '@mui/icons-material/Groups';
import {
  LogoWrapper,
  LogoImage,
  ListItemBtn,
  ListIcon,
  ListText,
  LogoutButton,
  DrawerStyles,
} from './styles';
import { aiThinker } from '@/assets/images';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setActivePath } from '@/redux/Slices/sidebarSlice';

interface SidebarProps {
  open: boolean;
  drawerWidth: number;
  collapsedWidth: number;
}

const menuItems = [
  { text: 'Dashboard', icon: <HouseIcon />, path: '/' },
  { text: 'Profile', icon: <ProfileIcon />, path: '/profile' },
  { text: 'Employees', icon: <GroupsIcon />, path: '/employees' },
];

export const Sidebar: React.FC<SidebarProps> = ({ open, drawerWidth, collapsedWidth }) => {
  const dispatch = useAppDispatch();
  const { activePath } = useAppSelector(state => state.sidebar);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const activeItem = menuItems.find(item => location.pathname === item.path);
    if (activeItem && activeItem.path !== activePath) {
      dispatch(setActivePath(activeItem.path));
    }
  }, [location.pathname, activePath, dispatch]);

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

      <List sx={{ flexGrow: 1, mt: 3 }}>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemBtn
              open={open}
              active={activePath === path}
              onClick={() => {
                dispatch(setActivePath(path));
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
        open={open}
        startIcon={<LogoutIcon sx={{ color: open ? '#fff' : 'primary.main' }} />}
        onClick={() => navigate('/login')}
      >
        {open && 'Log Out'}
      </LogoutButton>
    </Drawer>
  );
};
