import { Box } from '@mui/material';
import { WrappedTypography } from '@/components';
import { profileInfoCard, sectionHeader } from '../../styles';

interface ProfileInfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ProfileInfoSection = ({ title, children }: ProfileInfoSectionProps) => (
  <Box sx={profileInfoCard}>
    <WrappedTypography sx={sectionHeader}>{title}</WrappedTypography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{children}</Box>
  </Box>
);
