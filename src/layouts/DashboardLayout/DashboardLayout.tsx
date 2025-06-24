import React, { useState } from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import { AppBar } from './AppBar';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;
const collapsedWidth = 68;

export const DashboardLayout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f1f1f1' }}>
      <CssBaseline />
      <AppBar open={open} onMenuClick={toggleDrawer} />
      <Sidebar open={open} drawerWidth={drawerWidth} collapsedWidth={collapsedWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: '64px', // Matches AppBar height
          marginLeft: open ? 0 : 0,
          padding: theme.spacing(3),
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)`,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '24px',
            padding: theme.spacing(4),
            boxShadow: theme.shadows[1],
            minHeight: 'calc(100vh - 96px)', // Adjust based on your needs
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
