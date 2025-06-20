import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { formStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { setFormData } from '@/slices/formSlice';
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
  // Automatically fill form with saved data
  useEffect(() => {
    reset(savedData);
  }, [savedData, reset]);
  const onSubmit = (data: FormValues) => {
    dispatch(setFormData(data));
    alert("Form is submitted")
    // console.log('Form submitted:', data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyles.container}>
      <div style={formStyles.fieldWrapper}>
        <label htmlFor="name" style={formStyles.label}>
          Name:
        </label>
        <input id="name" {...register('name')} style={formStyles.input} />
        {errors.name && <p style={formStyles.errorText}>{errors.name.message}</p>}
      </div>
      <div style={formStyles.fieldWrapper}>
        <label htmlFor="email" style={formStyles.label}>
          Email:
        </label>
        <input id="email" {...register('email')} style={formStyles.input} />
        {errors.email && <p style={formStyles.errorText}>{errors.email.message}</p>}
      </div>
      <div style={formStyles.fieldWrapper}>
        <label htmlFor="age" style={formStyles.label}>
          Age:
        </label>
        <input id="age" type="number" {...register('age')} style={formStyles.input} />
        {errors.age && <p style={formStyles.errorText}>{errors.age.message}</p>}
      </div>
      <button type="submit" style={formStyles.submitButton}>
        Submit
      </button>
    </form>
  );
};
