import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton, Box, Stack } from '@mui/material';
import { SLIDER_CONFIG } from '@/common';
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
  width = SLIDER_CONFIG.DEFAULT.WIDTH,
  height = SLIDER_CONFIG.DEFAULT.HEIGHT,
  autoPlay = SLIDER_CONFIG.DEFAULT.AUTO_PLAY,
  interval = SLIDER_CONFIG.DEFAULT.INTERVAL,
  showDots = SLIDER_CONFIG.DEFAULT.SHOW_DOTS,
  showArrows = SLIDER_CONFIG.DEFAULT.SHOW_ARROWS,
  arrowSize = SLIDER_CONFIG.DEFAULT.ARROW_SIZE,
  dotSize = SLIDER_CONFIG.DEFAULT.DOT_SIZE,
}: SlideImageProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  // Memoize the showNextImage function with useCallback
  const showNextImage = useCallback(() => {
    setImageIndex(index => (index === images.length - 1 ? 0 : index + 1));
  }, [images.length]);
  const showPrevImage = useCallback(() => {
    setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
  }, [images.length]);
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(showNextImage, interval);
    return () => clearTimeout(timer);
  }, [imageIndex, autoPlay, interval, showNextImage]); // Now includes showNextImage
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
            transform: 'translateX(-50%)',
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setImageIndex(index)}
              sx={{
                width: SLIDER_CONFIG.DOT_SIZES[dotSize],
                height: SLIDER_CONFIG.DOT_SIZES[dotSize],
                borderRadius: '50%',
                bgcolor: imageIndex === index ? 'primary.main' : 'grey.500',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              aria-label={`View Image ${index + 1}`}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};
