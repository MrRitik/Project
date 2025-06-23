import { styled } from '@mui/material/styles';
import { Box, IconButton, Stack } from '@mui/material';

// Accepts width and height as props
export const SliderContainer = styled(Box)<{ width?: string | number; height?: string | number }>(
  ({ width, height }) => ({
    position: 'relative',
    overflow: 'hidden',
    width,
    height,
  }),
);

// Accepts dynamic transform offset
export const ImageWrapper = styled(Box)<{ offset: number }>(({ offset }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  transition: 'transform 0.5s ease',
  transform: `translateX(-${offset}%)`,
}));

export const SlideImageBox = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  flexShrink: 0,
});

export const ArrowButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  backgroundColor: 'rgba(0,0,0,0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});

export const DotContainer = styled(Stack)({
  position: 'absolute',
  bottom: 10,
  left: '50%',
  transform: 'translateX(-50%)',
});

export const Dot = styled(Box, {
  shouldForwardProp: prop => prop !== 'active' && prop !== 'size',
})<{ active: boolean; size: number }>(({ theme, active, size }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[500],
}));
