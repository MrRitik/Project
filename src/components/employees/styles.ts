import type { SxProps, Theme } from '@mui/system';

export const employeeTableWrapper: SxProps<Theme> = {
  p: {
    xs:1.5,
    md:4
  },
  borderRadius: 3,
  bgcolor: '#f9f9f9',
};

export const searchBox: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '20px',
  px: {
    md:3,
    xs:0,
  },
  py: 0.5,
  width: {
    xs:220,
    md:350
  },
  bgcolor: '#fff',
};

export const tableHeaderCell: SxProps<Theme> = {
  fontWeight: 500,
  backgroundColor: '#f0f0f0',
};
