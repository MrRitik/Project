import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton, Box, Stack } from '@mui/material';
export interface SlideImageProps {
  images: {
    url: string;
    alt: string;
  }[];
  width?: string | number;
  height?: string | number;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  arrowSize?: 'small' | 'medium' | 'large';
  dotSize?: 'small' | 'medium' | 'large';
}
export const SlideImage = ({
  images,
  width = '100%',
  height = '100%',
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
  arrowSize = 'medium',
  dotSize = 'medium',
}: SlideImageProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImage = () => {
    setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
  };
  const showPrevImage = () => {
    setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
  };
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(showNextImage, interval);
    return () => clearTimeout(timer);
  }, [imageIndex, autoPlay, interval]);
  const dotSizes = {
    small: 6,
    medium: 8,
    large: 10,
  };
  return (
    <Box
      aria-label="Image Slider"
      sx={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${imageIndex * 100}%)`,
        }}
      >
        {images.map(({ url, alt }, index) => (
          <Box
            key={`${url}-${index}`}
            component="img"
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
      {showArrows && images.length > 1 && (
        <>
          <IconButton
            onClick={showPrevImage}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
            aria-label="View Previous Image"
            size={arrowSize}
          >
            <ChevronLeft fontSize={arrowSize} />
          </IconButton>
          <IconButton
            onClick={showNextImage}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
            }}
            aria-label="View Next Image"
            size={arrowSize}
          >
            <ChevronRight fontSize={arrowSize} />
          </IconButton>
        </>
      )}
      {showDots && images.length > 1 && (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setImageIndex(index)}
              sx={{
                width: dotSizes[dotSize],
                height: dotSizes[dotSize],
                borderRadius: '50%',
                bgcolor: imageIndex === index ? 'primary.main' : 'grey.500',
                cursor: 'pointer',
              }}
              aria-label={`View Image ${index + 1}`}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};
