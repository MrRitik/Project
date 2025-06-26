import type { SxProps, Theme } from '@mui/material/styles';

export const notFoundWrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
};

export const notFoundTitle: SxProps<Theme> = theme => ({
  fontSize: '6rem',
  color: '#ff4d4f',
  marginBottom: theme.spacing(2),
  fontWeight: 700,
});

export const notFoundText: SxProps<Theme> = {
  fontSize: '2rem',
  color: '#333',
};
