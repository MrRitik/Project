import type { SxProps, Theme } from '@mui/material';

export const profileStyles: Record<string, SxProps<Theme>> = {
  root: {},
  layout: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 3,
  },
  leftPanel: {
    width: { xs: '100%', md: '33%' },
  },
  rightPanel: {
    width: { xs: '100%', md: '67%' },
  },
  paper: {
    p: 3,
    textAlign: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    mx: 'auto',
    mb: 2,
    bgcolor: 'primary.main',
  },
  changePhotoBtn: {
    mt: 2,
  },
  infoPaper: {
    p: 3,
  },
  sectionTitle: {
    mb: 3,
  },
  fieldRow: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 2,
    mb: 2,
  },
  inputField: {
    mb: 2,
  },
  bioField: {
    mb: 3,
  },
  actionButtons: {
    display: 'flex',
    gap: 2,
  },
};
