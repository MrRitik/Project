import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DashboardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

export const StatCardWrapper = styled(Box)(({ theme }) => ({
  flex: '1 1 100%',
  [theme.breakpoints.up('sm')]: {
    flex: '1 1 48%',
  },
  [theme.breakpoints.up('md')]: {
    flex: '1 1 22%',
  },
}));

export const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
}));
