import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, Typography, useTheme, useMediaQuery } from '@mui/material';
import { AppBar } from './AppBar';
import { Sidebar } from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { layoutWrapper, mainContent, pageTitle, contentWrapper } from './styles';

const drawerWidth = 240;
const collapsedWidth = 68;

export const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const location = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setOpen(!isSmallScreen);
  }, [isSmallScreen]);

  const toggleDrawer = () => setOpen(prev => !prev);

  const getTitle = () => {
    if (location.pathname.includes('employees')) return 'Employees';
    if (location.pathname.includes('profile')) return 'Account Setting';
    return 'Dashboard';
  };

  return (
    <Box sx={layoutWrapper}>
      <CssBaseline />
      <AppBar open={open} onMenuClick={toggleDrawer} />
      <Sidebar open={open} drawerWidth={drawerWidth} collapsedWidth={collapsedWidth} />

      <Box component="main" sx={mainContent(open)}>
        <Typography variant="h4" sx={pageTitle}>
          {getTitle()}
        </Typography>
        <Box sx={contentWrapper}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
