import React from 'react';
import { Box, Paper } from '@mui/material';
import { WrappedTypography } from '@/components';
import { dashboardContainer, headerText, statsWrapper, statsCard, contentSection } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Box sx={dashboardContainer}>
      <WrappedTypography type="h4" sx={headerText}></WrappedTypography>

      {/* Stats Section */}
      <Box sx={statsWrapper}>
        {['Users', 'Revenue', 'Performance'].map((label, index) => (
          <Paper key={index} sx={statsCard}>
            <WrappedTypography type="h6">{label}</WrappedTypography>
            <WrappedTypography type="h4">{Math.floor(Math.random() * 1000)}</WrappedTypography>
          </Paper>
        ))}
      </Box>

      <Box sx={contentSection}>
        <WrappedTypography type="h6" gutterBottom>
          Recent Activity
        </WrappedTypography>
        <WrappedTypography type="body2" color="text.secondary">
          Placeholder for charts, tables, or recent logs...
        </WrappedTypography>
      </Box>
    </Box>
  );
};
