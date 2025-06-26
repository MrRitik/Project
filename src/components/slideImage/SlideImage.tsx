import { useState, useEffect, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { SLIDER_CONFIG } from '@/common';
import {
  sliderContainer,
  imageWrapper,
  slideImageBox,
  arrowButton,
  dotContainer,
  dot,
} from './styles';

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
  }, [imageIndex, autoPlay, interval, showNextImage]);

  return (
    <Box sx={sliderContainer(width, height)} aria-label="Image Slider">
      <Box sx={imageWrapper(imageIndex * 100)}>
        {images.map(({ url, alt }, index) => (
          <Box
            key={`${url}-${index}`}
            component="img"
            src={url}
            alt={alt}
            sx={slideImageBox}
            aria-hidden={imageIndex !== index}
          />
        ))}
      </Box>

      {showArrows && images.length > 1 && (
        <>
          <IconButton
            onClick={showPrevImage}
            aria-label="View Previous Image"
            size={arrowSize}
            sx={{ ...arrowButton, left: 16 }}
          >
            <ChevronLeft fontSize={arrowSize} />
          </IconButton>
          <IconButton
            onClick={showNextImage}
            aria-label="View Next Image"
            size={arrowSize}
            sx={{ ...arrowButton, right: 16 }}
          >
            <ChevronRight fontSize={arrowSize} />
          </IconButton>
        </>
      )}

      {showDots && images.length > 1 && (
        <Box sx={dotContainer}>
          {images.map((_, index) => (
            <Box
              key={index}
              sx={dot(imageIndex === index, SLIDER_CONFIG.DOT_SIZES[dotSize])}
              onClick={() => setImageIndex(index)}
              aria-label={`View Image ${index + 1}`}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
