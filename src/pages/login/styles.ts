import type { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const paper: SxProps<Theme> = {
  p: 4,
  width: '100%',
  boxShadow: 3,
};

export const form: SxProps<Theme> = {
  mt: 1,
};

export const submitButton: SxProps<Theme> = {
  mt: 3,
  mb: 2,
};

export const linkBox: SxProps<Theme> = {
  textAlign: 'center',
};
