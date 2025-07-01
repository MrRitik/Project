import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

export const employeeTableWrapper: SxProps<Theme> = {
  p: {
    xs: 1.5,
    md: 1,
  },
  borderRadius: theme => theme.shape.borderRadius,
  bgcolor: theme => theme.palette.background.default,
};

export const searchBox: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  border: theme => '1px solid ' + theme.palette.divider,
  borderRadius: theme => theme.shape.borderRadius,
  px: {
    md: 3,
    xs: 0,
  },
  py: 0.5,
  width: {
    xs: 220,
    md: 350,
  },
  bgcolor: theme => theme.palette.background.paper,
};

export const tableHeaderCell: SxProps<Theme> = {
  fontWeight: 500,
  backgroundColor: theme => theme.palette.background.default,
};
