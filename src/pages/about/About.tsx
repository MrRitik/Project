import React from 'react';
import Box from '@mui/material/Box';
import { container} from './styles';
import { WrappedTypography } from '@/components';

export const About: React.FC = () => {
  return (
    <Box sx={container}>
      <WrappedTypography type="h4">
        About Page (Public)
      </WrappedTypography>

      <WrappedTypography type="body1">
        This is a public About page. It uses a custom typography wrapper for consistent MUI styling.
      </WrappedTypography>
    </Box>
  );
};
