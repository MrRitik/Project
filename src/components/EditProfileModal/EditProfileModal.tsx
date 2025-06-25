import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FormTextField } from '../FormTextField';

const profileSchema = yup.object().shape({
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

export interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  phone: string;
  dateOfJoining: string;
  country: string;
  zipCode: string;
  cityState: string;
}

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedData: ProfileData) => void;
  initialData: ProfileData;
}

export const EditProfileModal = ({ open, onClose, onSave, initialData }: EditProfileModalProps) => {
  const { control, handleSubmit, reset } = useForm<ProfileData>({
    defaultValues: initialData,
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = (data: ProfileData) => {
    onSave(data);
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const cityStateOptions = [
    { value: 'Hyderabad, Telangana', label: 'Hyderabad, Telangana' },
    { value: 'Bangalore, Karnataka', label: 'Bangalore, Karnataka' },
    { value: 'Mumbai, Maharashtra', label: 'Mumbai, Maharashtra' },
    { value: 'Delhi, NCR', label: 'Delhi, NCR' },
    { value: 'Chennai, Tamil Nadu', label: 'Chennai, Tamil Nadu' },
  ];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: '30px', 
            overflow: 'hidden',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          color: '#1976d2',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '24px',
          mt: 2,
        }}
      >
        Edit Profile Information
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, m: 2 }}>
          <Stack direction="row" spacing={4} mb={4}>
            <Box flex={1}>
              <FormTextField control={control} name="firstName" label="First Name" />
              <FormTextField control={control} name="email" label="Email Address" type="email" />
              <FormTextField control={control} name="bio" label="Bio" />
              <FormTextField control={control} name="country" label="Country" />
              <FormTextField control={control} name="zipCode" label="Zip Code" />
            </Box>
            <Box flex={1}>
              <FormTextField control={control} name="lastName" label="Last Name" />
              <FormTextField control={control} name="phone" label="Phone" />
              <FormTextField control={control} name="dateOfJoining" label="Date of Joining" />
              <Controller
                name="cityState"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    select
                    label="City/State"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    error={!!error}
                    helperText={error?.message}
                  >
                    {cityStateOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Box>
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions sx={{ margin: '0 40px 50px 0' }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{ borderRadius: '30px', padding: '8px 40px' }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
          sx={{ borderRadius: '30px', padding: '8px 40px' }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
