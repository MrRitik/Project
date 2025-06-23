import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const NotFoundWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
}));

export const NotFoundTitle = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  color: '#ff4d4f',
  marginBottom: theme.spacing(2),
  fontWeight: 700,
}));

export const NotFoundText = styled(Typography)(() => ({
  fontSize: '2rem',
  color: '#333',
}));
