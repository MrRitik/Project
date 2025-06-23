import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { SLIDER_CONFIG } from '@/common';
import {
  SliderContainer,
  ImageWrapper,
  SlideImageBox,
  ArrowButton,
  DotContainer,
  Dot,
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
    <SliderContainer width={width} height={height} aria-label="Image Slider">
      <ImageWrapper offset={imageIndex * 100}>
        {images.map(({ url, alt }, index) => (
          <SlideImageBox
            key={`${url}-${index}`}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
          />
        ))}
      </ImageWrapper>

      {showArrows && images.length > 1 && (
        <>
          <ArrowButton
            onClick={showPrevImage}
            aria-label="View Previous Image"
            size={arrowSize}
            sx={{ left: 16 }}
          >
            <ChevronLeft fontSize={arrowSize} />
          </ArrowButton>
          <ArrowButton
            onClick={showNextImage}
            aria-label="View Next Image"
            size={arrowSize}
            sx={{ right: 16 }}
          >
            <ChevronRight fontSize={arrowSize} />
          </ArrowButton>
        </>
      )}

      {showDots && images.length > 1 && (
        <DotContainer direction="row" spacing={1}>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={imageIndex === index}
              size={SLIDER_CONFIG.DOT_SIZES[dotSize]}
              onClick={() => setImageIndex(index)}
              aria-label={`View Image ${index + 1}`}
            />
          ))}
        </DotContainer>
      )}
    </SliderContainer>
  );
};
