import { Box } from '@mui/material';
import { WrappedTypography } from '@/components';
import { labelText, valueText } from '../../styles';

interface ProfileInfoFieldProps {
  label: string;
  value: string | number;
}

export const ProfileInfoField = ({ label, value }: ProfileInfoFieldProps) => (
  <Box sx={{ mb: 3 }}>
    <WrappedTypography sx={labelText}>{label}</WrappedTypography>
    <WrappedTypography sx={valueText}>{value || '—'}</WrappedTypography>
  </Box>
);
