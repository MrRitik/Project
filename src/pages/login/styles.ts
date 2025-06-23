import type { SxProps, Theme } from '@mui/material';

export const loginStyles: Record<string, SxProps<Theme>> = {
  wrapper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    p: 4,
    width: '100%',
    boxShadow: 3,
  },
  form: {
    mt: 1,
  },
  submitButton: {
    mt: 3,
    mb: 2,
  },
  linkBox: {
    textAlign: 'center',
  },
};
