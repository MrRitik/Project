import { Box, Paper, TextField, Button, Container, Link } from '@mui/material';
import { WrappedTypography } from '@/components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { wrapper, paper, form, submitButton, linkBox } from './styles';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={wrapper}>
        <Paper elevation={3} sx={paper}>
          <WrappedTypography type="h5" align="center" gutterBottom>
            Sign In
          </WrappedTypography>
          <Box component="form" onSubmit={handleSubmit} sx={form}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={e => handleInputChange('email', e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={e => handleInputChange('password', e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" sx={submitButton}>
              Sign In
            </Button>
            <Box sx={linkBox}>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
