import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { TextField, MenuItem, type TextFieldProps } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface FormTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  variant?: TextFieldProps['variant'];
  fullWidth?: boolean;
  margin?: TextFieldProps['margin'];
  select?: boolean;
  options?: Option[]; // Required if select is true
}

export function FormTextField<T extends FieldValues>({
  control,
  name,
  label,
  type = 'text',
  variant = 'standard',
  fullWidth = true,
  margin = 'normal',
  select = false,
  options = [],
}: FormTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant={variant}
          fullWidth={fullWidth}
          margin={margin}
          error={!!error}
          helperText={error?.message}
          select={select}
        >
          {select &&
            options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  );
}
