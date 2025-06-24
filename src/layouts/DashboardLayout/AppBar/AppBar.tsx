import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import {
  AppBarWrapper,
  ToolbarWrapper,
  LogoImage,
  LeftSection,
  StyledAvatar,
  BackIcon,
} from './styles';
import { aiThinker } from '@/assets/images';
import { img1 } from '@/assets/images';

interface AppBarProps {
  open: boolean;
  onMenuClick: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ open, onMenuClick }) => {
  return (
    <AppBarWrapper position="fixed" elevation={0}>
      <ToolbarWrapper>
        <LeftSection>
          <LogoImage src={aiThinker} alt="AI Thinkers Logo" />
          <IconButton onClick={onMenuClick} sx={BackIcon}>
            {open ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
          </IconButton>
        </LeftSection>
        <StyledAvatar src={img1} />
      </ToolbarWrapper>
    </AppBarWrapper>
  );
};
