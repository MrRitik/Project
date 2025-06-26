import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { dashboardContainer, headerText, statsWrapper, statsCard, contentSection } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Box sx={dashboardContainer}>
      <Typography variant="h4" sx={headerText}>
        
      </Typography>

      {/* Stats Section */}
      <Box sx={statsWrapper}>
        {['Users', 'Revenue', 'Performance'].map((label, index) => (
          <Paper key={index} sx={statsCard}>
            <Typography variant="h6">{label}</Typography>
            <Typography variant="h4">{Math.floor(Math.random() * 1000)}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Main Content Section */}
      <Box sx={contentSection}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Placeholder for charts, tables, or recent logs...
        </Typography>
      </Box>
    </Box>
  );
};
