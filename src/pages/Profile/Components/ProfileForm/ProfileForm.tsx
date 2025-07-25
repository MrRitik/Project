import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { CITY_STATE_OPTION } from '@/common';
import { type ProfileData } from '@/types/ProfileData';
import { ProfileValidationSchema } from '../ProfileValidationSchema'; 

interface ProfileFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedData: ProfileData) => void;
  initialData: ProfileData;
}

export const ProfileForm = ({ open, onClose, onSave, initialData }: ProfileFormProps) => {
  const { control, handleSubmit, reset } = useForm<ProfileData>({
    defaultValues: initialData,
    resolver: yupResolver(ProfileValidationSchema),
  });

  const onSubmit = (data: ProfileData) => {
    onSave(data);
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

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
                    {CITY_STATE_OPTION.map(option => (
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
