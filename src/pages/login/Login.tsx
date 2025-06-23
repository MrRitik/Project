import { Box, Paper, Typography, TextField, Button, Container, Link } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginStyles } from './styles';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Login attempt:', formData);
    navigate('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={loginStyles.wrapper}>
        <Paper elevation={3} sx={loginStyles.paper}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={loginStyles.form}>
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
            <Button type="submit" fullWidth variant="contained" sx={loginStyles.submitButton}>
              Sign In
            </Button>
            <Box sx={loginStyles.linkBox}>
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
