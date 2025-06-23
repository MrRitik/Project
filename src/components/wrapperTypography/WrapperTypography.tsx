import React from 'react';
import Typography, { type TypographyProps } from '@mui/material/Typography';
import type { SxProps } from '@mui/material';
import type { Theme } from '@emotion/react';

interface Props extends TypographyProps {
  children?: React.ReactNode;
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';
  className?: string;
  sx?: SxProps<Theme>;
  style?: React.CSSProperties;
  errorText?: string;
  errorTextStyles?: SxProps<Theme>; // Changed from string to SxProps
}

export const WrappedTypography: React.FC<Props> = ({
  children,
  type = 'body1',
  className,
  sx,
  style,
  errorText,
  errorTextStyles,
  ...props
}) => {
  return (
    <>
      <Typography variant={type} className={className} sx={sx} style={style} {...props}>
        {children}
      </Typography>
      {errorText && (
        <Typography variant="caption" color="error" sx={errorTextStyles}>
          {errorText}
        </Typography>
      )}
    </>
  );
};
