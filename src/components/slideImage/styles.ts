import type { SxProps, Theme } from '@mui/material/styles';

export const sliderContainer = (
  width?: string | number,
  height?: string | number,
): SxProps<Theme> => ({
  position: 'relative',
  overflow: 'hidden',
  width,
  height,
});

export const imageWrapper = (offset: number): SxProps<Theme> => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  transition: 'transform 0.5s ease',
  transform: `translateX(-${offset}%)`,
});

export const slideImageBox: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  flexShrink: 0,
};

export const arrowButton: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  backgroundColor: 'rgba(0,0,0,0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
};

export const dotContainer: SxProps<Theme> = {
  position: 'absolute',
  bottom: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 8,
};

export const dot =
  (active: boolean, size: number): SxProps<Theme> =>
  theme => ({
    width: size,
    height: size,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[500],
  });
