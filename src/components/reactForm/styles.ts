import type { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
  maxWidth: '420px',
  mx: 'auto',
  my: 6,
  p: 4,
  border: '1px solid #e0e0e0',
  borderRadius: 2,
  backgroundColor: '#fff',
  boxShadow: 2,
};

export const submitButton: SxProps<Theme> = {
  mt: 2,
  py: 1.5,
  fontWeight: 600,
};
