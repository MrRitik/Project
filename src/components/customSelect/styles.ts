import { styled } from '@mui/material/styles';
import { FormControl, Typography, Select } from '@mui/material';

export const StyledFormControl = styled(FormControl)({
  width: '120px',
  marginTop: '60px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#75756f',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#75756f',
    },
  },
});
export const StyledLabel = styled(Typography)(({ theme }) => ({
  color: '#75756f',
  marginBottom: theme.spacing(0),
}));

export const StyledSelect = styled(Select<string>)({
  '& .MuiSelect-select': {
    padding: '10px',
    color: '#75756f',
  },
});

export const StyledMenuPaper = {
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
