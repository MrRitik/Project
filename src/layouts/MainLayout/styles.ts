import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

const drawerWidth = 240;
const collapsedWidth = 68;

export const layoutWrapper: SxProps<Theme> = {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: theme => theme.palette.background.paper,
};

export const mainContent = (open: boolean): SxProps<Theme> => ({
  flexGrow: 1,
  marginTop: '64px',
  backgroundColor: theme => theme.palette.background.default,
  minHeight: '100vh',
  borderRadius: '24px 0 0 0',
  transition: theme =>
    theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  width: {
    xs: '100%',
    md: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)`,
  },
});

export const pageTitle: SxProps<Theme> = {
  margin: '40px 0 0 50px',
  fontWeight: 600,
};

export const contentWrapper: SxProps<Theme> = {
  backgroundColor: theme => theme.palette.background.paper,
  borderRadius: theme => theme.shape.borderRadius,
  margin: {
    xs: '20px',
    md: '45px',
  },
  boxShadow: 'none',
};
