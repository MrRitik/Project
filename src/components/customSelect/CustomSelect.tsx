import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material';
import { StyledFormControl, StyledLabel, StyledSelect, StyledMenuPaper } from './styles';

export const CustomSelect = () => {
  const [designation, setDesignation] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setDesignation(event.target.value);
  };

  return (
    <StyledFormControl variant="outlined">
      <StyledLabel variant="subtitle1">Designation</StyledLabel>
      <StyledSelect
        id="designation-select"
        value={designation}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: StyledMenuPaper,
          },
        }}
      >
        <MenuItem value="MD">MD</MenuItem>
        <MenuItem value="OD">OD</MenuItem>
        <MenuItem value="Dr">Dr</MenuItem>
      </StyledSelect>
    </StyledFormControl>
  );
};
