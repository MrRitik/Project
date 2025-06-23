import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBannerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

export const StyledBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
});

export const StyledOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
});

export const StyledContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  padding: theme.spacing(4),
  maxWidth: '80%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    maxWidth: '90%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    maxWidth: '95%',
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h4.fontSize,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
    marginBottom: theme.spacing(2),
  },
}));

export const StyledBannerButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  borderRadius: theme.shape.borderRadius,
  border: 'none',
  cursor: 'pointer',
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    fontSize: theme.typography.body2.fontSize,
  },
}));
