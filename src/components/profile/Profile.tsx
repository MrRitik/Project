import { Box, Avatar, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {
  profileContainer,
  profileHeader,
  profileInfoCard,
  sectionHeader,
  labelText,
  valueText,
  editButton,
} from './styles';
import { img1 } from '@/assets/images';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '@/redux/slices/profileSlice';
import type { RootState } from '@/redux/store';
import { EditProfileModal } from '../EditProfileModal';

export const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state: RootState) => state.profile);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSave = (updatedData: typeof profileData) => {
    dispatch(updateProfile(updatedData));
  };

  return (
    <Box sx={profileContainer}>
      <Typography variant="h5" pb={3} pl={1}>
        My Profile
      </Typography>

      <Box sx={profileHeader}>
        <Avatar src={img1} alt="Profile Picture" sx={{ width: 80, height: 80 }} />
        <Box ml={2}>
          <Typography variant="h5" fontWeight={600}>
            {profileData.firstName} {profileData.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profileData.bio}
          </Typography>
        </Box>
        <Box ml="auto">
          <Button
            variant="outlined"
            endIcon={<EditIcon />}
            sx={editButton}
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit
          </Button>
        </Box>
      </Box>

      <Box sx={profileInfoCard}>
        <Typography sx={sectionHeader}>Personal Information</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>First Name</Typography>
              <Typography sx={valueText}>{profileData.firstName}</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Email Address</Typography>
              <Typography sx={valueText}>{profileData.email}</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Bio</Typography>
              <Typography sx={valueText}>{profileData.bio}</Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Last Name</Typography>
              <Typography sx={valueText}>{profileData.lastName}</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Phone</Typography>
              <Typography sx={valueText}>{profileData.phone}</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Date of Joining</Typography>
              <Typography sx={valueText}>{profileData.dateOfJoining}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={profileInfoCard}>
        <Typography sx={sectionHeader}>Address</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Country</Typography>
              <Typography sx={valueText}>{profileData.country}</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Postal Code</Typography>
              <Typography sx={valueText}>{profileData.zipCode}</Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>City/State</Typography>
              <Typography sx={valueText}>{profileData.cityState}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <EditProfileModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
        initialData={profileData}
      />
    </Box>
  );
};
