import styles from '@/CSS/Banner.module.css';
interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onClick?: () => void;
  textAlign?: 'left' | 'center' | 'right';
  textColor?: string;
  overlayColor?: string; // New prop for overlay color customization
  overlayOpacity?: number;
  height?: string;
  minHeight?: string;
  className?: string; // Allow additional className
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
    <div className={`${styles.container} ${className}`} style={containerStyle}>
      <div className={styles.background} style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className={styles.overlay} style={overlayStyle} />
      <div className={styles.content} style={contentStyle}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaText && (
          <button type="submit" className={styles.button} onClick={onClick}>
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};
