import type { Theme } from '@mui/material/styles';
import { Button, type SxProps, styled } from '@mui/material';
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const DrawerStyles = (
  open: boolean,
  drawerWidth: number,
  collapsedWidth: number,
): SxProps<Theme> => ({
  width: open ? drawerWidth : collapsedWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: open ? drawerWidth : collapsedWidth,
    borderRight: 'none',
    boxShadow: 'none',
    overflowX: 'hidden',
    backgroundColor: '#fff',
    transition: theme =>
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
  },
});

export const LogoWrapper = styled(Box)(({ theme }) => ({
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

export const LogoImage = styled('img')({
  height: 32,
  width: 'auto',
});

export const ListItemBtn = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'active',
})<{ open: boolean; active: boolean }>(({ open, active }) => ({
  minHeight: 44,
  justifyContent: open ? 'initial' : 'center',
  paddingLeft: 20,
  paddingRight: 20,
  color: active ? '#2196f3' : '#808080',
  '&:disabled': {
    pointerEvents: 'none',
    color: 'black',
  },
}));

export const ListIcon = styled(ListItemIcon, {
  shouldForwardProp: prop => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
  minWidth: 0,
  marginRight: open ? 16 : 'auto',
  justifyContent: 'center',
}));

export const ListText = styled(ListItemText, {
  shouldForwardProp: prop => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
  opacity: open ? 1 : 0,
  transition: 'opacity 0.2s ease-in-out',
}));

export const LogoutButton = styled(Button)(() => ({
  backgroundColor: '#2196f3',
  borderRadius: '30px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  margin:'20px',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#1976d2',
  },
}));
