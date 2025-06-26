import React from 'react';
import { Box, Typography } from '@mui/material';
import { notFoundWrapper, notFoundTitle, notFoundText } from './styles';

const NotFound: React.FC = () => (
  <Box sx={notFoundWrapper}>
    <Typography variant="h1" sx={notFoundTitle}>
      404
    </Typography>
    <Typography variant="body1" sx={notFoundText}>
      Page Not Found
    </Typography>
  </Box>
);

export default NotFound;
