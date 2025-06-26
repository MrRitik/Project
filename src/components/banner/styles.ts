import type { SxProps, Theme } from '@mui/material/styles';

export const bannerContainer = (height: string, minHeight: string): SxProps<Theme> => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: 2,
  boxShadow: 2,
  height,
  minHeight,
});

export const background: SxProps<Theme> = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
};

export const overlay = (color: string, opacity: number): SxProps<Theme> => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
  backgroundColor: color,
  opacity,
});

export const content =
  (align: 'left' | 'center' | 'right', color: string): SxProps<Theme> =>
  theme => ({
    position: 'relative',
    zIndex: 3,
    textAlign: align,
    color,
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
  });

export const title: SxProps<Theme> = theme => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.h4.fontSize,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h5.fontSize,
  },
});

export const subtitle: SxProps<Theme> = theme => ({
  fontSize: theme.typography.body1.fontSize,
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
    marginBottom: theme.spacing(2),
  },
});

export const button: SxProps<Theme> = theme => ({
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
});
