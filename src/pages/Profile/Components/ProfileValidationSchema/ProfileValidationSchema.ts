import * as yup from 'yup';

export const ProfileValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  bio: yup.string().required('Bio is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone is required'),
  dateOfJoining: yup.string().required('Date of joining is required'),
  country: yup.string().required('Country is required'),
  zipCode: yup
    .string()
    .matches(/^[0-9]{6}$/, 'Zip code must be 6 digits')
    .required('Zip code is required'),
  cityState: yup.string().required('City/State is required'),
});
