import React, { useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { AppBar } from '../../components/AppBar';
import { Sidebar } from '../../components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { layoutWrapper, mainContent, pageTitle, contentWrapper } from './styles';
import { WrappedTypography } from '@/components';
import { setSidebarOpen } from '@/redux/Slices/sidebarSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const drawerWidth = 240;
const collapsedWidth = 68;

export const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(state => state.sidebar);
  const theme = useTheme();
  const location = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Check if there's a persisted state in localStorage
    const savedState = localStorage.getItem('sidebarState');
    if (!savedState) {
      // Only set initial state if no persisted state exists
      dispatch(setSidebarOpen(!isSmallScreen));
    }
  }, [isSmallScreen, dispatch]);

  const toggleDrawer = () => dispatch(setSidebarOpen(!isOpen));

  const getTitle = () => {
    if (location.pathname.includes('employees')) return 'Employees';
    if (location.pathname.includes('profile')) return 'Account Setting';
    return 'Dashboard';
  };

  return (
    <Box sx={layoutWrapper}>
      {/* <CssBaseline /> */}
      <AppBar open={isOpen} onMenuClick={toggleDrawer} />
      <Sidebar open={isOpen} drawerWidth={drawerWidth} collapsedWidth={collapsedWidth} />

      <Box component="main" sx={mainContent(isOpen)}>
        <WrappedTypography type="h4" sx={pageTitle}>
          {getTitle()}
        </WrappedTypography>
        <Box sx={contentWrapper}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
