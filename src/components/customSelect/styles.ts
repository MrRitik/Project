import type { SxProps, Theme } from '@mui/material/styles';

export const formControl: SxProps<Theme> = {
  width: '120px',
  mt: '60px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#75756f',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#75756f',
    },
  },
};

export const label: SxProps<Theme> = {
  color: '#75756f',
  mb: 0,
};

export const select: SxProps<Theme> = {
  '& .MuiSelect-select': {
    padding: '10px',
    color: '#75756f',
  },
};

export const menuPaper: SxProps<Theme> = {
  boxShadow: 3,
  '& .MuiMenuItem-root': {
    display: 'flex',
    justifyContent: 'flex-start',
    color: '#5e5e5c',
    fontSize: '15px',
    fontWeight: 500,
  },
  '& .MuiMenuItem-root:last-of-type': {
    borderBottom: 'none',
  },
};
