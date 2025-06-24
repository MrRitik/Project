import type { SxProps, Theme } from '@mui/material';

export const dashboardLayoutStyles: Record<string, SxProps<Theme>> = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#f5f6fa',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
      background: '#fff',
      borderRight: '1px solid #e0e0e0',
    },
  },
  drawerPaper: {
    width: 240,
    boxSizing: 'border-box',
    background: '#fff',
    borderRight: '1px solid #e0e0e0',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 16px 16px 16px',
    minHeight: 64,
  },
  closeMenuBtn: {
    display: { xs: 'block', md: 'none' },
  },
  listItem: {
    borderRadius: 8,
    margin: '4px 8px',
    '&.Mui-selected, &.Mui-selected:hover': {
      background: '#e3f2fd',
      color: '#1976d2',
      fontWeight: 600,
    },
    '&:hover': {
      background: '#f5f5f5',
    },
  },
  listItemIcon: {
    minWidth: 36,
    color: '#757575',
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#fff',
    padding: '16px 32px',
    borderBottom: '1px solid #e0e0e0',
    minHeight: 72,
  },
  menuBtn: {
    display: { xs: 'block', md: 'none' },
    marginRight: 2,
  },
  headerTitle: {
    fontWeight: 600,
    flex: 1,
    textAlign: 'left',
    marginLeft: 2,
  },
  headerAvatar: {
    width: 44,
    height: 44,
    marginLeft: 2,
  },
  content: {
    flex: 1,
    padding: { xs: 2, md: 4 },
    background: '#f5f6fa',
    minHeight: 'calc(100vh - 72px)',
  },
};
