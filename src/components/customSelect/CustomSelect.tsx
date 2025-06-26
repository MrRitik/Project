import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import type { SelectChangeEvent } from '@mui/material';
import { formControl, label, select, menuPaper } from './styles';

export const CustomSelect = () => {
  const [designation, setDesignation] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setDesignation(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={formControl}>
      <Typography variant="subtitle1" sx={label}>
        Designation
      </Typography>
      <Select
        id="designation-select"
        value={designation}
        onChange={handleChange}
        sx={select}
        MenuProps={{
          PaperProps: {
            sx: menuPaper,
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
