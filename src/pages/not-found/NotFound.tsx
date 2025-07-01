import React from 'react';
import { Box } from '@mui/material';
import { WrappedTypography } from '@/components';
import { notFoundWrapper, notFoundTitle, notFoundText } from './styles';

const NotFound: React.FC = () => (
  <Box sx={notFoundWrapper}>
    <WrappedTypography type="h1" sx={notFoundTitle}>
      404
    </WrappedTypography>
    <WrappedTypography type="body1" sx={notFoundText}>
      Page Not Found
    </WrappedTypography>
  </Box>
);

export default NotFound;
