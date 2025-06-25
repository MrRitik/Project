import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {type ProfileData } from '@/components/EditProfileModal/EditProfileModal'; 

const initialState: ProfileData = {
  firstName: 'Vishal',
  lastName: 'Singh',
  email: 'vishal.singh@aithinkers.com',
  bio: 'UX/UI Developer',
  phone: '9030973722',
  dateOfJoining: '01/05/2018',
  country: 'India',
  zipCode: '500030',
  cityState: 'Hyderabad, Telangana',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<ProfileData>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
