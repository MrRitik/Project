import { Box, Avatar, Button } from '@mui/material';
import { WrappedTypography } from '@/components';
import EditIcon from '@mui/icons-material/Edit';
import { profileContainer, profileHeader, editButton } from './styles';
import { img1 } from '@/assets/images';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '@/redux/Slices/profileSlice';
import type { RootState } from '@/redux/store';
import { ProfileForm } from '@/pages/Profile/Components/ProfileForm';
import { ProfileInfoSection } from './Components/ProfileInfoSection/ProfileInfoSection';
import { ProfileInfoField } from './Components/ProfileInfoField';

export const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state: RootState) => state.profile);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSave = (updatedData: typeof profileData) => {
    dispatch(updateProfile(updatedData));
  };

  return (
    <Box sx={profileContainer}>
      <WrappedTypography type="h5" pb={3} pl={1}>
        My Profile
      </WrappedTypography>

      <Box sx={profileHeader}>
        <Avatar src={img1} alt="Profile Picture" sx={{ width: 80, height: 80 }} />
        <Box ml={2}>
          <WrappedTypography type="h5" fontWeight={600}>
            {profileData.firstName} {profileData.lastName}
          </WrappedTypography>
          <WrappedTypography type="body2" color="text.secondary">
            {profileData.bio}
          </WrappedTypography>
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

      <ProfileInfoSection title="Personal Information">
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <ProfileInfoField label="First Name" value={profileData.firstName} />
          <ProfileInfoField label="Email Address" value={profileData.email} />
          <ProfileInfoField label="Bio" value={profileData.bio} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <ProfileInfoField label="Last Name" value={profileData.lastName} />
          <ProfileInfoField label="Phone" value={profileData.phone} />
          <ProfileInfoField label="Date of Joining" value={profileData.dateOfJoining} />
        </Box>
      </ProfileInfoSection>

      <ProfileInfoSection title="Address">
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <ProfileInfoField label="Country" value={profileData.country} />
          <ProfileInfoField label="Postal Code" value={profileData.zipCode} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 250 }}>
          <ProfileInfoField label="City/State" value={profileData.cityState} />
        </Box>
      </ProfileInfoSection>

      <ProfileForm
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
        initialData={profileData}
      />
    </Box>
  );
};
