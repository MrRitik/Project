import { Box, Container, Button, Paper } from '@mui/material';
import { WrappedTypography } from '@/components';
import { Block as BlockIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Unauth = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center', width: '100%' }}>
          <BlockIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
          <WrappedTypography type="h4" gutterBottom>
            Access Denied
          </WrappedTypography>
          <WrappedTypography type="body1" color="text.secondary" sx={{ mb: 3 }}>
            You are not authorized to view this page. Please contact your administrator if you
            believe this is an error.
          </WrappedTypography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" onClick={() => navigate('/')}>
              Go Home
            </Button>
            <Button variant="outlined" onClick={() => navigate('/login')}>
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
