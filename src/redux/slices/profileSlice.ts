import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProfileData } from '@/types/ProfileData';
import { PROFILE_INITIAL_DATA } from '@/common';

const initialState: ProfileData = {
  ...PROFILE_INITIAL_DATA,
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
