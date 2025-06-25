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

export const Profile = () => {
  return (
    <Box sx={profileContainer}>
      <Typography variant="h5" pb={3} pl={1}>
        My Profile
      </Typography>

      <Box sx={profileHeader}>
        <Avatar src={img1} alt="Profile Picture" sx={{ width: 80, height: 80 }} />
        <Box ml={2}>
          <Typography variant="h5" fontWeight={600}>
            Vishal Singh
          </Typography>
          <Typography variant="body2" color="text.secondary">
            UX/UI Developer
          </Typography>
        </Box>
        <Box ml="auto">
          <Button variant="outlined" endIcon={<EditIcon />} sx={editButton}>
            Edit
          </Button>
        </Box>
      </Box>

      <Box sx={profileInfoCard}>
        <Typography sx={sectionHeader}>Personal Information</Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {/* Left Column */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>First Name</Typography>
              <Typography sx={valueText}>Vishal</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Email Address</Typography>
              <Typography sx={valueText}>vishal.singh@aithinkers.com</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Bio</Typography>
              <Typography sx={valueText}>UX/UI Developer</Typography>
            </Box>
          </Box>

          {/* Right Column */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Last Name</Typography>
              <Typography sx={valueText}>Singh</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Phone</Typography>
              <Typography sx={valueText}>9030973722</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Date of Joining</Typography>
              <Typography sx={valueText}>01/05/2018</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={profileInfoCard}>
        <Typography sx={sectionHeader}>Address </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {/* Left Column */}
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Country</Typography>
              <Typography sx={valueText}>India</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>Postal Code</Typography>
              <Typography sx={valueText}>500030</Typography>
            </Box>
          </Box>

          <Box sx={{ flex: 1, minWidth: 250 }}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={labelText}>city/State</Typography>
              <Typography sx={valueText}>Hyderabad, Telangana</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
