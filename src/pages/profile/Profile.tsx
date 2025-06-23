import { Box, Typography, Paper, Avatar, TextField, Button, Divider } from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';
import { useState } from 'react';
import { profileStyles } from './styles';

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Software developer with 5+ years of experience in React and TypeScript.',
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box sx={profileStyles.root}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>

      <Box sx={profileStyles.layout}>
        <Box sx={profileStyles.leftPanel}>
          <Paper sx={profileStyles.paper}>
            <Avatar sx={profileStyles.avatar}>
              <PersonIcon sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              {profileData.firstName} {profileData.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {profileData.email}
            </Typography>
            <Button variant="outlined" sx={profileStyles.changePhotoBtn}>
              Change Photo
            </Button>
          </Paper>
        </Box>

        <Box sx={profileStyles.rightPanel}>
          <Paper sx={profileStyles.infoPaper}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Divider sx={profileStyles.sectionTitle} />

            <Box sx={profileStyles.fieldRow}>
              <TextField
                fullWidth
                label="First Name"
                value={profileData.firstName}
                onChange={e => handleInputChange('firstName', e.target.value)}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Last Name"
                value={profileData.lastName}
                onChange={e => handleInputChange('lastName', e.target.value)}
                margin="normal"
              />
            </Box>

            <TextField
              fullWidth
              label="Email"
              value={profileData.email}
              onChange={e => handleInputChange('email', e.target.value)}
              margin="normal"
              sx={profileStyles.inputField}
            />

            <TextField
              fullWidth
              label="Phone"
              value={profileData.phone}
              onChange={e => handleInputChange('phone', e.target.value)}
              margin="normal"
              sx={profileStyles.inputField}
            />

            <TextField
              fullWidth
              label="Bio"
              value={profileData.bio}
              onChange={e => handleInputChange('bio', e.target.value)}
              margin="normal"
              multiline
              rows={4}
              sx={profileStyles.bioField}
            />

            <Box sx={profileStyles.actionButtons}>
              <Button variant="contained">Save Changes</Button>
              <Button variant="outlined">Cancel</Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
