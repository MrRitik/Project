import type { SxProps, Theme } from '@mui/material/styles';

export const dashboardContainer: SxProps<Theme> = {
  p: {
    xs: 2,
    sm: 3,
    md: 4,
  },
  backgroundColor: theme => theme.palette.background.default,
  minHeight: '100vh',
  borderRadius: theme => theme.shape.borderRadius,
};

export const headerText: SxProps<Theme> = {
  fontWeight: 700,
  mb: 4,
};

export const statsWrapper: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 3,
  mb: 6,
  justifyContent: {
    xs: 'center',
    sm: 'flex-start',
  },
};

export const statsCard: SxProps<Theme> = theme => ({
  flex: '1 1 250px',
  minWidth: '220px',
  maxWidth: '300px',
  p: 3,
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
});

export const contentSection: SxProps<Theme> = {
  p: 3,
  borderRadius: theme => theme.shape.borderRadius,
  backgroundColor: theme => theme.palette.background.paper,
  boxShadow: 1,
};
