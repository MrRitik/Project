import { Typography, Box } from '@mui/material';
import { labelText, valueText } from './styles';

interface ProfileInfoFieldProps {
  label: string;
  value: string | number;
}

export const ProfileInfoField = ({ label, value }: ProfileInfoFieldProps) => (
  <Box sx={{ mb: 3 }}>
    <Typography sx={labelText}>{label}</Typography>
    <Typography sx={valueText}>{value || '—'}</Typography>
  </Box>
);
