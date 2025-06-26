import { Box, Typography, Button } from '@mui/material';
import { bannerContainer, background, overlay, content, title, button } from './styles';

interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onClick?: () => void;
  textAlign?: 'left' | 'center' | 'right';
  textColor?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  height?: string;
  minHeight?: string;
  className?: string;
}

export const Banner = ({
  imageUrl,
  title: heading,
  subtitle,
  ctaText,
  onClick,
  textAlign = 'right',
  textColor = '#ffffff',
  overlayColor = '#000000',
  overlayOpacity = 0.3,
  height = '400px',
  minHeight = '300px',
  className = '',
}: BannerProps) => {
  return (
    <Box sx={bannerContainer(height, minHeight)} className={className}>
      <Box sx={{ ...background, backgroundImage: `url(${imageUrl})` }} />
      <Box sx={overlay(overlayColor, overlayOpacity)} />
      <Box sx={content(textAlign, textColor)}>
        <Typography sx={title}>{heading}</Typography>
        {subtitle && <Typography>{subtitle}</Typography>}
        {ctaText && (
          <Button type="button" onClick={onClick} sx={button}>
            {ctaText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
