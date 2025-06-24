// styles.ts
import { AppBar, Avatar, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material';

export const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#000000',
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1,
}));

export const ToolbarWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '64px',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const LeftSection = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const LogoImage = styled('img')({
  height: 28,
  width: 'auto',
});

export const StyledAvatar = styled(Avatar)({
  width: 36,
  height: 36,
});

// Bold arrow icon styling with left margin
export const BackIcon: SxProps<Theme> = {
  color: '#333',
  fontWeight: 900,
  marginLeft: 10,
  '& .MuiSvgIcon-root': {
    fontSize: '1.25rem', // adjust for visibility
    fontWeight: 700,
  },
};
