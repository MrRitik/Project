import type { SxProps, Theme } from '@mui/material/styles';

export const profileContainer: SxProps<Theme> = {
  p: 3,
  borderRadius: 2,
  bgcolor: '#fff',
  boxShadow: 1,
};

export const profileHeader: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: 2,
  p: 3,
  mb: 3,
  border: '1px solid #e0e0e0',
};

export const editButton: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  borderColor: 'primary.main',
  color: 'primary.main',
  borderRadius: '999px',
  px: 2,
  py: 0.5,
  fontSize: '0.875rem',
  fontWeight: 500,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: 'primary.light',
  },
};

export const profileInfoCard: SxProps<Theme> = {
  border: '1px solid #e0e0e0',
  borderRadius: 2,
  p: 3,
  mb: 3,
  bgcolor: '#fff',
};

export const sectionHeader: SxProps<Theme> = {
  fontWeight: 600,
  mb: 2,
  fontSize: '1.1rem',
};

export const labelText: SxProps<Theme> = {
  fontSize: '15px',
  color: 'text.secondary',
  mb: 0.5,
};

export const valueText: SxProps<Theme> = {
  fontSize: '20px',
  fontWeight: 500,
  color: 'text.primary',
};
