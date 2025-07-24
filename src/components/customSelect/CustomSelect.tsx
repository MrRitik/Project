import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { WrappedTypography } from '@/components';
import type { SelectChangeEvent } from '@mui/material';
import { formControl, label as labelStyle, select, menuPaper } from './styles';
import type { FC } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  label: string;
  value: string;
  onHandleChange: (event: SelectChangeEvent) => void;
  options: Option[];
}

export const CustomSelect: FC<CustomSelectProps> = ({
  id = 'designation-select',
  label,
  value,
  onHandleChange,
  options,
}) => {
  return (
    <FormControl variant="outlined" sx={formControl}>
      <WrappedTypography type="subtitle1" sx={labelStyle}>
        {label}
      </WrappedTypography>
      <Select
        id={id}
        value={value}
        onChange={onHandleChange}
        sx={select}
        MenuProps={{
          PaperProps: {
            sx: menuPaper,
          },
        }}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
