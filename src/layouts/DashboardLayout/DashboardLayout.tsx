import React, { useState } from 'react';
import { Box, CssBaseline, Typography, useTheme } from '@mui/material';
import { AppBar } from './AppBar';
import { Sidebar } from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const collapsedWidth = 68;

export const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getTitle = () => {
    if (location.pathname.includes('employees')) return 'Employees';
    if (location.pathname.includes('profile')) return 'Account Setting';
    return 'Dashboard';
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#fff' }}>
      <CssBaseline />
      <AppBar open={open} onMenuClick={toggleDrawer} />
      <Sidebar open={open} drawerWidth={drawerWidth} collapsedWidth={collapsedWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: '64px', 
          marginLeft: open ? 0 : 0,
          backgroundColor: '#f1f1f1',
          borderRadius: '24px 0 0 0',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)`,
        }}
      >
        <Typography variant="h4" sx={{ margin: '40px 0 0 50px', fontWeight: '600' }}>
          {getTitle()}
        </Typography>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '24px',
             margin: '30px 30px 0px 40px ',
            minHeight: '78vh',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
