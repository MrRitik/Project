import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { setFormData } from '@/redux/Slices/formSlice';
import { Box, TextField, Button, Stack } from '@mui/material';
import { container, submitButton } from './styles';

type FormValues = {
  name: string;
  email: string;
  age: number;
};

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    age: yup
      .number()
      .typeError('Age must be a number')
      .positive('Age must be positive')
      .integer('Age must be an integer')
      .required('Age is required'),
  })
  .required();

export const ReactForm = () => {
  const dispatch = useDispatch();
  const savedData = useSelector((state: RootState) => state.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: savedData,
  });

  useEffect(() => {
    reset(savedData);
  }, [savedData, reset]);

  const onSubmit = (data: FormValues) => {
    dispatch(setFormData(data));
    alert('Form is submitted');
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={container}>
      <Stack spacing={3}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Age"
          variant="outlined"
          type="number"
          fullWidth
          {...register('age')}
          error={!!errors.age}
          helperText={errors.age?.message}
        />

        <Button type="submit" variant="contained" sx={submitButton}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};
