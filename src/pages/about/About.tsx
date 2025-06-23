import React from 'react';
import Box from '@mui/material/Box';
import styles from './styles';
import { WrappedTypography } from '@/components';

export const About: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <WrappedTypography type="h4" sx={styles.heading}>
        About Page (Public)
      </WrappedTypography>

      <WrappedTypography type="body1" sx={styles.description}>
        This is a public About page. It uses a custom typography wrapper for consistent MUI styling.
      </WrappedTypography>
    </Box>
  );
};
