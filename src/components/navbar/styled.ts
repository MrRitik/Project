import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.shadows[2],
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  minHeight: '64px',
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    minHeight: '56px',
  },
}));

export const StyledLogoLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h6.fontSize,
  '&:hover': {
    color: theme.palette.primary.light,
    textDecoration: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

export const Links = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(0.5),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.25),
  },
  '& .MuiButton-root': {
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.body1.fontSize,
    padding: `${theme.spacing(0.75)} ${theme.spacing(1.5)}`,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    '&.active': {
      backgroundColor: theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightBold,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body2.fontSize,
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    },
  },
}));
