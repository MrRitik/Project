import type { SxProps, Theme } from '@mui/material/styles';

export const footerBox: SxProps<Theme> = theme => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.grey[300],
  padding: `${theme.spacing(3)} 0`,
  marginTop: 'auto',
  borderTop: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(2)} 0`,
  },
});

export const footerContainer: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60px',
  [theme.breakpoints.down('sm')]: {
    minHeight: '50px',
  },
});

export const footerText: SxProps<Theme> = theme => ({
  textAlign: 'center',
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.grey[400],
  m: 0,
  '& a': {
    color: theme.palette.primary.light,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },
});
