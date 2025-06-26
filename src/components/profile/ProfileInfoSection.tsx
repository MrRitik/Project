import { Box, Typography } from '@mui/material';
import { profileInfoCard, sectionHeader } from './styles';

interface ProfileInfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ProfileInfoSection = ({ title, children }: ProfileInfoSectionProps) => (
  <Box sx={profileInfoCard}>
    <Typography sx={sectionHeader}>{title}</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{children}</Box>
  </Box>
);
