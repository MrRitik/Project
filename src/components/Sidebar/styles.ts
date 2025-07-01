import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';
import { Button, styled } from '@mui/material';
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
    backgroundColor: theme => theme.palette.background.paper,
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
})<{ open: boolean; active: boolean }>(({ theme, open, active }) => ({
  minHeight: 44,
  justifyContent: open ? 'initial' : 'center',
  paddingLeft: 20,
  paddingRight: 20,
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  '&:disabled': {
    pointerEvents: 'none',
    color: theme.palette.text.disabled,
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

export const LogoutButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  backgroundColor: open ? theme.palette.primary.main : 'transparent',
  borderRadius: '30px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  color: open ? theme.palette.primary.contrastText : theme.palette.primary.main,
  padding: '6px',
  display: 'flex',
  alignItems: 'center',
  margin: '12px',
  justifyContent: 'center',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: open ? theme.palette.primary.dark : 'transparent',
  },
}));
