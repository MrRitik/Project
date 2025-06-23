import {
  StyledBannerContainer,
  StyledBackground,
  StyledOverlay,
  StyledContent,
  StyledTitle,
  StyledSubtitle,
  StyledBannerButton,
} from './styled';

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
  title,
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
  const overlayStyle = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  };
  const contentStyle = {
    color: textColor,
    textAlign,
  };
  const containerStyle = {
    height,
    minHeight,
  };
  return (
    <StyledBannerContainer style={containerStyle} className={className}>
      <StyledBackground style={{ backgroundImage: `url(${imageUrl})` }} />
      <StyledOverlay style={overlayStyle} />
      <StyledContent style={contentStyle}>
        <StyledTitle>{title}</StyledTitle>
        {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
        {ctaText && (
          <StyledBannerButton type="submit" onClick={onClick}>
            {ctaText}
          </StyledBannerButton>
        )}
      </StyledContent>
    </StyledBannerContainer>
  );
};
