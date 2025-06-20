import { useState } from 'react';
import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
export const CustomSelect = () => {
  const [designation, setDesignation] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setDesignation(event.target.value);
  };
  return (
    <FormControl
      variant="outlined"
      sx={{
        width: '120px',
        backgroundColor: 'white',
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#75756f',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#75756f',
          },
        },
      }}
    >
      <Typography variant="subtitle1" sx={{ color: '#75756f', mb: 0.5 }}>
        Designation
      </Typography>
      <Select
        id="designation-select"
        value={designation}
        onChange={handleChange}
        sx={{
          '& .MuiSelect-select': {
            padding: '10px',
            color: '#75756f',
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 2,
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
            },
          },
        }}
      >
        <MenuItem value="MD">MD</MenuItem>
        <MenuItem value="OD">OD</MenuItem>
        <MenuItem value="Dr">Dr</MenuItem>
      </Select>
    </FormControl>
  );
};
